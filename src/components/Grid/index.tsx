
type Props = {
  header: string
}

const Grid: React.FC<Props> = ({ header, children }) => (
    <div className='container mx-auto text-center'>
        <h1>{header}</h1>
        <div className='row'>
            {children}
        </div>
    </div>
)

export default Grid
