interface ErrorProps {
    message: string
}
export const Error = ({message}: ErrorProps) => {
    return (
        <p style={{ color: 'red', fontWeight: 'bold', fontSize: '30px' }}>{message}</p>
    )
}