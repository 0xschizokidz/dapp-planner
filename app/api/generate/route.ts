import { NextRequest, NextResponse } from 'next/server'
import {
  generatePrompt,
  generateLeanPrompt,
  generateQuickPrompt,
} from '@/lib/prompts'

// Environment variable validation
function validateEnvironment() {
  const ollamaModel = process.env.OLLAMA_MODEL
  const openaiApiKey = process.env.OPENAI_API_KEY
  const openaiModel = process.env.OPENAI_MODEL || 'gpt-3.5-turbo'
  
  // Check if we have either Ollama or OpenAI configuration
  if (!ollamaModel && !openaiApiKey) {
    throw new Error('Either OLLAMA_MODEL or OPENAI_API_KEY environment variable is required')
  }
  
  return { ollamaModel, openaiApiKey, openaiModel }
}

// Input validation
function validateInput(data: any) {
  const { dappType, chain, model } = data
  
  if (!dappType || typeof dappType !== 'string') {
    throw new Error('dappType is required and must be a string')
  }
  
  if (!chain || typeof chain !== 'string') {
    throw new Error('chain is required and must be a string')
  }
  
  if (!model || typeof model !== 'string') {
    throw new Error('model is required and must be a string')
  }
  
  return data
}

export async function POST(req: NextRequest) {
  try {
    // Validate environment variables
    const { ollamaModel, openaiApiKey, openaiModel } = validateEnvironment()
    
    // Parse and validate request body
    const requestBody = await req.json()
    const {
      dappType,
      chain,
      model,
      targetAudience,
      budget,
      timeline,
      teamSize,
      complexity = 'lean', // default to 'lean'
    } = validateInput(requestBody)

    let prompt = ''

    switch (complexity) {
      case 'quick':
        prompt = generateQuickPrompt({ dappType, chain, model })
        break
      case 'full':
        prompt = generatePrompt({
          dappType,
          chain,
          model,
          targetAudience,
          budget,
          timeline,
          team: teamSize,
        })
        break
      case 'lean':
      default:
        prompt = generateLeanPrompt({ dappType, chain, model })
        break
    }

    let aiResponse: string

    if (openaiApiKey) {
      // Use OpenAI API for cloud deployment
      const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: openaiModel,
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 2000,
          temperature: 0.7,
        }),
      })

      if (!openaiResponse.ok) {
        const errorText = await openaiResponse.text()
        console.error('OpenAI API error:', errorText)
        return NextResponse.json(
          { error: `OpenAI API error: ${errorText}` },
          { status: openaiResponse.status }
        )
      }

      const openaiResult = await openaiResponse.json()
      
      if (!openaiResult.choices?.[0]?.message?.content) {
        console.error('Invalid response from OpenAI:', openaiResult)
        return NextResponse.json(
          { error: 'Invalid response from AI model' },
          { status: 500 }
        )
      }
      
      aiResponse = openaiResult.choices[0].message.content
    } else if (ollamaModel) {
      // Use Ollama API for local development
      const ollamaResponse = await fetch('http://ollama:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: ollamaModel,
          prompt,
          stream: false,
        }),
      })

      if (!ollamaResponse.ok) {
        const errorText = await ollamaResponse.text()
        console.error('Ollama API error:', errorText)
        return NextResponse.json(
          { error: `Ollama API error: ${errorText}` },
          { status: ollamaResponse.status }
        )
      }

      const ollamaResult = await ollamaResponse.json()
      
      if (!ollamaResult.response) {
        console.error('Invalid response from Ollama:', ollamaResult)
        return NextResponse.json(
          { error: 'Invalid response from AI model' },
          { status: 500 }
        )
      }
      
      aiResponse = ollamaResult.response
    } else {
      return NextResponse.json(
        { error: 'No AI service configured' },
        { status: 500 }
      )
    }
    
    return NextResponse.json({ output: aiResponse })
  } catch (error: any) {
    console.error('API route error:', error)
    
    // Handle different types of errors
    if (error.name === 'SyntaxError') {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
