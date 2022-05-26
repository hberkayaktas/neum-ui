import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = ({ children, ...rest }) => {
  console.log(rest)
  return (
    <a {...rest} className={`${styles.morph} ${styles.btn}`}>
      {children}
    </a>
  )
}
export const ButtonGroup = ({ children, ...rest }) => {
  return (
    <div className={`${styles.ButtonGroup}`} {...rest}>
      {children}
    </div>
  )
}
export const ButtonG = ({ children, ...rest }) => {
  console.log(rest)
  return (
    <a {...rest} className={`${styles.ButtonGroupItem}`}>
      {children}
    </a>
  )
}
export const ButtonLG = ({ children, ...rest }) => {
  console.log(rest)
  return (
    <a {...rest} className={`${styles.morph} ${styles.btn} ${styles.btn_lg}`}>
      {children}
    </a>
  )
}
export const ButtonSM = ({ children, ...rest }) => {
  console.log(rest)
  return (
    <a {...rest} className={`${styles.morph} ${styles.btn} ${styles.btn_sm}`}>
      {children}
    </a>
  )
}
export const ButtonSq = ({ children, ...rest }) => {
  return (
    <div className={`${styles.btn__square} ${styles.morph} `} {...rest}>
      {children}
    </div>
  )
}
export const ButtonPressed = ({ children, ...rest }) => {
  return (
    <a className={`${styles.btn} ${styles.morph} ${styles.active}`} {...rest}>
      {children}
    </a>
  )
}
export const ButtonIL = ({ children, icon, ...rest }) => {
  return (
    <a className={`${styles.morph} ${styles.btn} `} {...rest}>
      <i className={icon} /> {children}
    </a>
  )
}
export const ButtonIR = ({ children, icon, ...rest }) => {
  return (
    <a className={`${styles.morph} ${styles.btn} `} {...rest}>
      {children} <i className={icon} />
    </a>
  )
}
export const ButtonwIcon = ({ icon, ...rest }) => {
  return (
    <a className={`${styles.btn__icon} ${styles.morph} `} {...rest}>
      <i className={icon} />
    </a>
  )
}
export const ButtonIconRounded = ({ icon, ...rest }) => {
  return (
    <a
      className={`${styles.btn__icon} ${styles.btn__icon__rounded} ${styles.morph} `}
      {...rest}
    >
      <i className={icon} />
    </a>
  )
}
export const ButtonSmallR = ({ children, icon, ...rest }) => {
  return (
    <div
      className={`${styles.btn} ${styles.btn__sm} ${styles.morph}`}
      {...rest}
    >
      {children} <i className={icon}> </i>
    </div>
  )
}
export const ButtonSmallL = ({ children, icon, ...rest }) => {
  return (
    <div
      className={`${styles.btn} ${styles.btn__sm} ${styles.morph}`}
      {...rest}
    >
      <i className={icon} /> {children}
    </div>
  )
}
export const Select = ({ children, ...rest }) => {
  return (
    <select
      className={`${styles.morph} ${styles.btn} ${styles.select_box}`}
      {...rest}
    >
      {children}
    </select>
  )
}
export const Textarea = ({ children, ...rest }) => {
  return (
    <textarea
      type='text'
      {...rest}
      className={`${styles.morph} ${styles.active} ${styles.textareaHolder}`}
    >
      {children}
    </textarea>
  )
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

export const Radio = ({ children, checked, ...rest }) => {
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
        <input
          type='radio'
          name='deneme'
          style={{ display: 'none' }}
          {...rest}
        />
      </div>
      {children}
    </span>
  )
}
export const Dropdown = ({ children, ...rest }) => {
  console.log(children)
  return (
    <div className={`${styles.dropdown}`}>
      <button className={`${styles.dropbtn}`}>Dropdown <i className='fa-solid fa-angle-down'></i></button>
      <div className={`${styles.dropdownContent}`}>
        {children.map((item) => (
          <a href={`${item.link}`}>{item.content}</a>
        ))}
      </div>
    </div>
  )
}
export const Chart = ({ degerler, h, w, ...rest }) => {
  console.log(degerler)
  return (
    <div
      className={`${styles.chart}`}
      style={{ height: h, width: w }}
      {...rest}
    >
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

export const Progress = ({ value, h, w, ...rest }) => {
  console.log(value)
  return (
    <div
      className={`${styles.progress}`}
      style={{
        height: h,
        width: w
      }}
      {...rest}
    >
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

export const CircleProgress = ({ value, h, w, ...rest }) => {
  console.log(value)
  const angle = value * 3.6
  console.log(angle)
  return (
    <div
      className={`${styles.radial_progress}`}
      {...rest}
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

export const RegularCheckbox = ({ children, checked, ...rest }) => {
  return (
    <label className={`${styles.container}`}>
      {children}
      <input type='checkbox' checked={checked} {...rest} />
      <span className={`${styles.checkmark}`}></span>
    </label>
  )
}
export const Text = ({ children, ...rest }) => {
  return <p {...rest}>{children}</p>
}
export const TextMuted = ({ children, ...rest }) => {
  return (
    <p className={`${styles.muted}`} {...rest}>
      {children}
    </p>
  )
}
export const RegularCheckboxIOS = ({ children, checked, h, w, ...rest }) => {
  return (
    <label className={`${styles.containerIO}`}>
      <span
        style={{
          height: h,
          width: w,
          marginLeft: '30px'
        }}
      >
        {children}
      </span>
      <input type='checkbox' {...rest} checked={checked} />
      <span className={`${styles.checkmarkIO}`}></span>
    </label>
  )
}

export const Loading = ({ h, w, ...rest }) => {
  return (
    <div
      className={styles.loader_outer}
      style={{
        height: h,
        width: w
      }}
      {...rest}
    >
      <div className={styles.loader_border}>
        <div className={styles.loader_inner}>
          <div className={styles.loader_inner_shabow}></div>
        </div>
      </div>
    </div>
  )
}
export const Grid = ({ col, rows, colGap, rowGap, w, children, ...rest }) => {
  const colT = col || 1
  const rowsT = rows || 1
  const colGapT = colGap || '0px'
  const rowGapT = rowGap || '0px'
  const widthT = w || '100%'
  const gridTemp = {
    display: 'grid',
    gridTemplateColumns: `repeat(${colT}, 1fr)`,
    gridTemplateRows: `repeat(${rowsT}, 1fr)`,
    gridColumnGap: colGapT,
    gridRowGap: rowGapT,
    with: widthT
  }
  return (
    <div style={gridTemp} {...rest}>
      {children}
    </div>
  )
}
export const BoxMorph = ({ children, ...rest }) => {
  return (
    <div className={`${styles.Box}`} {...rest}>
      {children}
    </div>
  )
}

export const Box = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>
}

export const Title = ({ hL, children, ...rest }) => {
  console.log(hL)
  if (hL == 1) {
    return (
      <React.Fragment>
        <h1 className={`${styles.title}`} {...rest}>
          {children}
        </h1>
      </React.Fragment>
    )
  } else if (hL == 2) {
    return (
      <React.Fragment>
        <h2 className={`${styles.title}`} {...rest}>
          {children}
        </h2>
      </React.Fragment>
    )
  } else if (hL == 3) {
    return (
      <React.Fragment>
        <h3 className={`${styles.title}`} {...rest}>
          {children}
        </h3>
      </React.Fragment>
    )
  } else if (hL == 4) {
    return (
      <React.Fragment>
        <h4 className={`${styles.title}`} {...rest}>
          {children}
        </h4>
      </React.Fragment>
    )
  } else if (hL == 5) {
    return (
      <React.Fragment>
        <h5 className={`${styles.title}`} {...rest}>
          {children}
        </h5>
      </React.Fragment>
    )
  } else if (hL == 6) {
    return (
      <React.Fragment>
        <h6 className={`${styles.title}`} {...rest}>
          {children}
        </h6>
      </React.Fragment>
    )
  }
}
