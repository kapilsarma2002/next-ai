'use client'

import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="Ask a question"
          onChange={(e) => setValue(e.target.value)}
          className="border border-black/20 px-4 py-3 text-lg rounded-lg"
        />
        <button type="submit" className="bg-blue-400 px-4 py-3 ml-2 rounded-lg">
          Ask
        </button>
      </form>
    </div>
  )
}

export default Question
