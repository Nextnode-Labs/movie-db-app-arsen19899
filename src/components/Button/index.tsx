
type Props = {
  text?: string
  callback?: (() => void) | ((e: any) => Promise<void>)
  loading?: boolean
}

const Button: React.FC<Props> = ({ text, callback, loading }) => (
    <div className="d-grid gap-2 col-3 mx-auto mb-5">
        <button type='button' className="btn btn-dark btn-lg" onClick={callback}>
            {text}
        </button >
    </div>
)

export default Button
