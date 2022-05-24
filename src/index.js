import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = ({ children,...rest}) => {
  console.log(rest)
  return <a { ...rest } className={`${styles.morph} ${styles.btn}`}>{children}</a>
}

export const ButtonSq = ({ children }) => {
  return (
    <div className={`${styles.btn__square} ${styles.morph} `}>{children}</div>
  )
}
export const ButtonPressed = ({ children }) => {
  return (
    <a className={`${styles.btn} ${styles.morph} ${styles.active}`}>
      {children}
    </a>
  )
}
export const ButtonIL = ({ children, icon }) => {
  return (
    <a className={`${styles.morph} ${styles.btn} `}>
      <i className={icon} /> {children}
    </a>
  )
}
export const ButtonIR = ({ children, icon }) => {
  return (
    <a className={`${styles.morph} ${styles.btn} `}>
      {children} <i className={icon} />
    </a>
  )
}
export const ButtonwIcon = ({ icon }) => {
  return (
    <a className={`${styles.btn__icon} ${styles.morph} `}>
      <i className={icon} />
    </a>
  )
}
export const ButtonIconRounded = ({ icon }) => {
  return (
    <a
      className={`${styles.btn__icon} ${styles.btn__icon__rounded} ${styles.morph} `}
    >
      <i className={icon} />
    </a>
  )
}
export const ButtonSmallR = ({ children, icon }) => {
  return (
    <div className={`${styles.btn} ${styles.btn__sm} ${styles.morph}`}>
      {children} <i className={icon}> </i>
    </div>
  )
}
export const ButtonSmallL = ({ children, icon }) => {
  return (
    <div className={`${styles.btn} ${styles.btn__sm} ${styles.morph}`}>
      <i className={icon} /> {children}
    </div>
  )
}
export const Select = ({ children }) => {
  return <select className={`${styles.morph} ${styles.btn}`}>{children}</select>
}
export const Input = ({ ...rest }) => {
  return (
    <input
      type='text'
      {...rest}
      className={`${styles.input_morph} ${styles.morph} ${styles.active}`}
    />
  )
}

export const Checkbox = ({ children, key, ...rest }) => {
  console.log(rest)
  return (
    <span className={`${styles.checkbox_holder}`}>
      <input
        type='checkbox'
        {...rest}
        className={`${styles.ios_checkbox} `}
        id={key}
      />
      <label htmlFor={key} />
      <span style={{ marginLeft: '5px' }}>{children}</span>
    </span>
  )
}

export const Radio = ({ children, checked }) => {
  checked = checked || false
  let icon
  let isActive
  console.log(checked)
  if (checked) {
     icon = 'far fa-dot-circle'
     isActive = styles.active
  } else {
     icon = 'far fa-circle'
     isActive = null
  }
  return (
    <span>
      <div
        className={`${styles.btn__icon} ${styles.radio} ${styles.morph} ${isActive}`}
      >
        <i className={icon}> </i>
        <input type='radio' name='deneme' style={{ display: 'none' }} />
      </div>
      {children}
    </span>
  )
}

export const Chart = ({ degerler, h, w }) => {
  console.log(degerler)
  return (
    <div className={`${styles.chart}`} style={{ height: h, width: w }}>
      <ul className={`${styles.chart__grid}`}>
        {degerler.map((deger) => (
          <li
            key={deger}
            className={`${styles.chart__item} ${styles.morph} ${styles.active}`}
            style={{ paddingTop: 100 - deger + '%' }}
          >
            <div className={`${styles.chart__item__inner}`}></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Progress = ({ value, h, w  }) => {
  console.log(value)
  return (
    <div className={`${styles.progress}`} style={{
      height: h,
      width: w}}>
      <div
        className={`${styles.progress__item} ${styles.morph} ${styles.active}`}
      >
        <div
          className={`${styles.progress__item__inner}`}
          style={{ width: value + '%' }}
        ></div>
      </div>
    </div>
  )
}

export const CircleProgress = ({ value, h, w }) => {
  console.log(value)
  const angle = value * 3.6
  console.log(angle)
  return (
    <div
      className={`${styles.morph} ${styles.radial_progress}`}
      style={{
        height: h,
        width: w,
        background: `conic-gradient(#22ff82 0deg, #21bdff, #5433ff ${angle}deg, #ebecf0 ${
          angle + 5
        }deg, #ebecf0 360deg)`
      }}
    >
      <div className={`${styles.radial_inner}`}>{value}%</div>
    </div>
  )
}

export const RegularCheckbox = ({ children, checked }) => {
  return (
    <label className={`${styles.container}`}>
      {children}
      <input type='checkbox' checked={checked} />
      <span className={`${styles.checkmark}`}></span>
    </label>
  )
}

export const RegularCheckboxIOS = ({ children, checked,h,w,...rest }) => {
  return (
    <label className={`${styles.containerIO}`}>
      <span style={{
        height: h,
        width: w,marginLeft:'30px'}}>{children}</span>
      <input type='checkbox' {...rest} checked={checked} />
      <span className={`${styles.checkmarkIO}`}></span>
    </label>
  )
}

