import { useId } from 'react'

export function Logo(props) {
  let id = useId()

  return (
    <img
      src="https://portal.servly.app/static/media/servly-white.8f8c03de966c07ccb74b.png"
      className="h-14"
    />
  )
}
