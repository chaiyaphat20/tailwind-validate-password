import React, { ReactNode } from 'react'
import { classNames } from '../classNames'

interface PopoverProps {
  position: 'top' | 'bottom' | 'left' | 'right'
  content: ReactNode
  children: ReactNode
}

export const Popover: React.FC<PopoverProps> = ({
  position,
  content,
  children
}) => (
  <div id="tooltip" className="relative cursor-pointer group">
    <div className="mx-2 my-1">{children}</div>
    <span
      className={classNames(
        'absolute hidden group-hover:inline-block bg-white border text-black text-xs p-2 whitespace-nowrap rounded',
        position === 'top'
          ? 'left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]'
          : '',
        position === 'bottom'
          ? 'left-1/2 -translate-x-1/2 top-[calc(100%+5px)]'
          : '',
        position === 'left'
          ? 'top-1/2 -translate-y-1/2 right-[calc(100%+5px)]'
          : '',
        position === 'right'
          ? 'top-1/2 -translate-y-1/2 left-[calc(100%+5px)]'
          : ''
      )}
    >
      {content}
    </span>
    <span
      className={classNames(
        'absolute hidden group-hover:inline-block border-[6px]',
        position === 'top'
          ? 'left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-white'
          : '',
        position === 'bottom'
          ? 'left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-t-white'
          : '',
        position === 'left'
          ? 'top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-t-white'
          : '',
        position === 'right'
          ? 'top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-t-white'
          : ''
      )}
    ></span>
  </div>
)
