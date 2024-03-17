import React, { MouseEventHandler } from 'react'

interface Props {
  openPopUp: boolean
  closePopUp: () => void
  children: React.ReactNode
}

const PopUp = ({ openPopUp, closePopUp, children }: Props) => {
  const handlelosePopUp: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'ModelContainer') {
      closePopUp()
    }
  }

  if (openPopUp !== true) return null

  return (
    <div
      aria-hidden="true"
      id="ModelContainer"
      onClick={handlelosePopUp}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm"
    >
      <div className="lg:1/3 w-10/12 rounded-lg border-e-emerald-600 bg-white p-2 py-5 shadow-inner md:w-1/2">
        <div className="w-full items-center justify-center p-3">{children}</div>
      </div>
    </div>
  )
}

export default PopUp
