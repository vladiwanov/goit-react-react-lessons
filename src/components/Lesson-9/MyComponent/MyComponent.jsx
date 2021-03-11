import withFetch from '../hoc/withFetch';
import withLog from '../hoc/withLog'

function MyComponent() {
    console.log('this is a wrapComponent')

  return (
    <p>hi, it's wrapped component</p>
  )

}
export default withLog(MyComponent);