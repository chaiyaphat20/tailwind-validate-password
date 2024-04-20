'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Popover } from './components/Popover'
import correctIcon from '/public/icons/check-green.svg'
import closeIcon from '/public/icons/x.svg'
export default function Home() {
  const [atLeast8CharactersValidated, setAtLeast8CharactersValidated] =
    useState(false)
  const [upperAndLowerCaseValidated, setUpperAndLowerCaseValidated] =
    useState(false)
  const [atLeast1digitValidated, setAtLeast1digitValidated] = useState(false)

  const [
    atLeast8CharactersConfirmValidated,
    setAtLeast8CharactersConfirmValidated
  ] = useState(false)
  const [
    upperAndLowerCaseConfirmValidated,
    setUpperAndLowerCaseConfirmValidated
  ] = useState(false)
  const [atLeast1digitConfirmValidated, setAtLeast1digitConfirmValidated] =
    useState(false)

  const handleChange = (value: string) => {
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    // const special = new RegExp('(?=.*[!@#$%^&*])')
    const length = new RegExp('(?=.{8,})')
    if (lower.test(value) && upper.test(value)) {
      setUpperAndLowerCaseValidated(true)
    } else {
      setUpperAndLowerCaseValidated(false)
    }

    if (number.test(value)) {
      setAtLeast1digitValidated(true)
    } else {
      setAtLeast1digitValidated(false)
    }

    if (length.test(value)) {
      setAtLeast8CharactersValidated(true)
    } else {
      setAtLeast8CharactersValidated(false)
    }
  }

  const handleChangeConfirm = (value: string) => {
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    // const special = new RegExp('(?=.*[!@#$%^&*])')
    const length = new RegExp('(?=.{8,})')
    if (lower.test(value) && upper.test(value)) {
      setUpperAndLowerCaseConfirmValidated(true)
    } else {
      setUpperAndLowerCaseConfirmValidated(false)
    }

    if (number.test(value)) {
      setAtLeast1digitConfirmValidated(true)
    } else {
      setAtLeast1digitConfirmValidated(false)
    }

    if (length.test(value)) {
      setAtLeast8CharactersConfirmValidated(true)
    } else {
      setAtLeast8CharactersConfirmValidated(false)
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Popover
        position="top"
        content={
          <div className="flex flex-col bg-white px-4">
            <h1 className="text-sm font-medium">Your password must have:</h1>
            <div className="flex flex-row items-center mt-[6px]">
              {atLeast8CharactersValidated ? (
                <>
                  <Image src={correctIcon} alt="" className="ml-2 mr-[10px]" />
                  <h1 className="text-xs text-[#16A34A]">
                    At least 8 characters
                  </h1>
                </>
              ) : (
                <>
                  <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
                  <h1 className="text-xs ">At least 8 characters</h1>
                </>
              )}
            </div>
            <div className="flex flex-row items-center mt-[6px]">
              {upperAndLowerCaseValidated ? (
                <>
                  <Image src={correctIcon} alt="" className="ml-2 mr-[10px]" />
                  <div className="text-[#16A34A]">
                    <h1 className="text-xs">Upper case letter (e.g. ABC) &</h1>
                    <h1 className="text-xs">Lower case letter (e.g. abc)</h1>
                  </div>
                </>
              ) : (
                <>
                  <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
                  <div>
                    <h1 className="text-xs">Upper case letter (e.g. ABC) &</h1>
                    <h1 className="text-xs">Lower case letter (e.g. abc)</h1>
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-row items-center mt-[6px]">
              {atLeast1digitValidated ? (
                <>
                  <Image src={correctIcon} alt="" className="ml-2 mr-[10px]" />
                  <div className="text-[#16A34A]">
                    <h1 className="text-xs">At least one digit</h1>
                    <h1 className="text-xs">(e.g. 0,1,2,3,4,...)</h1>
                  </div>
                </>
              ) : (
                <>
                  <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
                  <div className="">
                    <h1 className="text-xs">At least one digit</h1>
                    <h1 className="text-xs">(e.g. 0,1,2,3,4,...)</h1>
                  </div>
                </>
              )}
            </div>
          </div>
        }
      >
        <div>
          <input
            placeholder="Password"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </Popover>
      <Popover
        position="left"
        content={
          <div className="flex flex-col bg-white px-4">
            <h1 className="text-sm font-medium">
              Your Confirm password must have:
            </h1>
            <div className="flex flex-row items-center mt-[6px]">
              {atLeast8CharactersConfirmValidated ? (
                <>
                  <Image src={correctIcon} alt="" className="ml-2 mr-[10px]" />
                  <h1 className="text-xs text-[#16A34A]">
                    At least 8 characters
                  </h1>
                </>
              ) : (
                <>
                  <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
                  <h1 className="text-xs ">At least 8 characters</h1>
                </>
              )}
            </div>
            <div className="flex flex-row items-center mt-[6px]">
              {upperAndLowerCaseConfirmValidated ? (
                <>
                  <Image src={correctIcon} alt="" className="ml-2 mr-[10px]" />
                  <div className="text-[#16A34A]">
                    <h1 className="text-xs">Upper case letter (e.g. ABC) &</h1>
                    <h1 className="text-xs">Lower case letter (e.g. abc)</h1>
                  </div>
                </>
              ) : (
                <>
                  <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
                  <div>
                    <h1 className="text-xs">Upper case letter (e.g. ABC) &</h1>
                    <h1 className="text-xs">Lower case letter (e.g. abc)</h1>
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-row items-center mt-[6px]">
              {atLeast1digitConfirmValidated ? (
                <>
                  <Image src={correctIcon} alt="" className="ml-2 mr-[10px]" />
                  <div className="text-[#16A34A]">
                    <h1 className="text-xs">At least one digit</h1>
                    <h1 className="text-xs">(e.g. 0,1,2,3,4,...)</h1>
                  </div>
                </>
              ) : (
                <>
                  <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
                  <div className="">
                    <h1 className="text-xs">At least one digit</h1>
                    <h1 className="text-xs">(e.g. 0,1,2,3,4,...)</h1>
                  </div>
                </>
              )}
            </div>
          </div>
        }
      >
        <div>
          <input
            placeholder="Confirm Password"
            onChange={(e) => handleChangeConfirm(e.target.value)}
          />
        </div>
      </Popover>
    </div>
  )
}
