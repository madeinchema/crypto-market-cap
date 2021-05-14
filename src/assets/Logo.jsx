import PropTypes from 'prop-types'
import { css } from 'styled-components/macro'

const Logo = props => {
  const { className } = props

  const logoStyles = css`
    &.logo {
      height: 100%;
      width: auto;
      font-size: 1.5rem;
      .logo--background {
        fill: #001529;
      }
      .logo--letter {
        fill: #ffffff;
      }
    }
  `

  return (
    <svg
      className={`logo ${className || ''}`}
      css={logoStyles}
      width="242"
      height="236"
      viewBox="0 0 242 236"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M121 0L217.947 46.6873L241.891 151.593L174.802 235.72H67.1984L0.108948 151.593L24.0529 46.6873L121 0Z"
        className="logo--background"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M163.876 162.111C153.479 173.524 138.498 180.686 121.843 180.686C90.4495 180.686 65 155.237 65 123.843C65 92.4495 90.4495 67 121.843 67C139.098 67 154.556 74.6878 164.981 86.8249L145.5 103.781C139.815 97.1798 131.395 93 122 93C104.879 93 91 106.879 91 124C91 141.121 104.879 155 122 155C130.881 155 138.889 151.266 144.541 145.282L163.876 162.111Z"
        className="logo--letter"
      />
    </svg>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
}

Logo.defaultProps = {
  className: undefined,
}

export default Logo
