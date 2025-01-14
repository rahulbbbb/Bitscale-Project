'use client'

import { Img, Img2, Img3, NavIcon1, NavIcon4, NavIcon5, NavIcon6, NavIcon7, SvgComponent, SvgComponentt } from '@/components/ui/icon'
import { useState } from 'react'
import { FaFileAlt,  FaSearch } from 'react-icons/fa'

export default function Home() {
  const [columns, setColumns] = useState([
    { title: 'Input Column', icon: <Img /> },
    { title: 'Action Column', icon: <SvgComponent /> },
    { title: 'Enrich Company', icon: <SvgComponentt /> }
  ])
  const [rows, setRows] = useState([
    [
      'Oct 12, 2024 at 14:08 PM',
      'Bitscale Evaluation - Account relev...',
      'Bitscale Evaluation - Account relev...'
    ],
    [
      'Oct 12, 2024 at 14:08 PM',
      '⚠️ cell data size exceeds limit',
      'BMW Evaluation - Relevancy c...'
    ],
    [
      'Oct 12, 2024 at 14:08 PM',
      '🔗 https://www.linkedin.com/bitS...',
      'Google Evaluation - Lievancy...'
    ],
    [
      'Oct 12, 2024 at 14:08 PM',
      '⏳ Loading data, Please wait',
      'Apple Evaluation - Olvancy che...'
    ],
    [
      'Oct 12, 2024 at 14:08 PM',
      '⏳ Loading data, Please wait',
      'Figma Evaluation - Evancy che...'
    ]
  ])

  const addRow = () => {
    setRows([...rows, Array(columns.length).fill('New Data')])
  }

  const addColumn = () => {
    setColumns([...columns, { title: 'New Column', icon: <FaFileAlt /> }])
    setRows(rows.map(row => [...row, 'New Data']))
  }

  const updateCell = (rowIndex: number, cellIndex: number, value: string) => {
    const updatedRows = rows.map((row, rIdx) =>
      rIdx === rowIndex
        ? row.map((cell, cIdx) => (cIdx === cellIndex ? value : cell))
        : row
    )
    setRows(updatedRows)
  }

  return (
    <>
      <div className="mx-4 mb-8 flex items-center justify-between rounded-md">
        {/* Search Input */}
        <div className="flex w-80 items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 dark:border-gray-700 dark:bg-gray-800">
          <FaSearch className="text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-sm text-gray-700 focus:outline-none dark:text-gray-200"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="rounded-md flex items-center gap-2 bg-gray-100 px-3 py-2 text-gray-700 shadow hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            <NavIcon1 /> 1/1 Row
          </button>

          <button className="rounded-md flex items-center gap-2 bg-gray-100 px-3 py-2 text-gray-700 shadow hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            <NavIcon4 /> 3/3 Column
          </button>
          <button className="rounded-md flex items-center bg-gray-100 px-3 py-2 text-gray-700 shadow hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            <NavIcon5 /> 0 Filter
          </button>
          <button className="rounded-md flex items-center bg-gray-100 px-3 py-2 text-gray-700 shadow hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            <NavIcon6 /> Sort
          </button>
        </div>

        {/* Enrich Button and Icons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="rounded-md border text-white bg-black px-3 py-2"
          >
            Enrich
          </button>
          <div className="flex items-center gap-4 cursor-pointer">
            <Img2 />
            <Img3 />
            <NavIcon7 />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 p-8 dark:bg-gray-900">
        {/* Table Section */}
        <div className="mx-auto max-w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full table-auto">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className="border-b-4 border-blue-300 px-4 py-3 text-left text-sm font-medium uppercase tracking-wide"
                  >
                    <div className="flex items-center gap-4">
                      {col.icon}
                      <span>{col.title}</span>
                    </div>
                  </th>
                ))}
                <th className="border-b-4 border-blue-300 px-4 py-3">
                  <button
                    onClick={addColumn}
                    className="rounded-md bg-blue-700 px-3 py-1 text-white hover:bg-blue-600"
                  >
                    + Add Column
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${
                    rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                  } dark:${
                    rowIndex % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'
                  } transition-colors`}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border-b border-gray-200 px-4 py-3 text-sm text-gray-800 dark:border-gray-600 dark:text-gray-200"
                    >
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) =>
                          updateCell(rowIndex, cellIndex, e.target.value)
                        }
                        className="w-full bg-transparent focus:outline-none"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 text-left">
            <button
              onClick={addRow}
              className="px-3 py-1 text-red-500 dark:hover:bg-red-400"
            >
              + Add Row
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
