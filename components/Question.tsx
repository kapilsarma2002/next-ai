'use client'

import { askQuestion } from '@/utils/api'
import { useState } from 'react'
import Spinner from './Spinner'

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const answer = await askQuestion(value)
    setResponse(answer)
    setValue('')
    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={loading}
          value={value}
          type="text"
          placeholder="Ask a question"
          onChange={(e) => setValue(e.target.value)}
          className="border border-black/20 px-4 py-3 text-lg rounded-lg"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 px-4 py-3 ml-2 rounded-lg"
        >
          Ask
        </button>
      </form>
      <div className="mt-2 p-2">
        {loading && <Spinner />}
        {response && !loading && <div>{response}</div>}
      </div>
    </div>
  )
}

export default Question
