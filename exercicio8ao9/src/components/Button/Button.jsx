import estiloButton from './Button.module.css'

function Button() {
  return (
    <div className={estiloButton.odin}>
      <button type='button' className={estiloButton.button}>
        clique aqui
      </button>
    </div>
  )
}

export default Button