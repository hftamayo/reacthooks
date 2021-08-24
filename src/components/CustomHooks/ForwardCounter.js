import Card from './Card';
import userCounter from '../../hooks/use-counter';

const ForwardCounter = () => {
    const counter = userCounter();
    /*
    override by use-counter custom hooks
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  */

  return <Card>{counter}</Card>;
};

export default ForwardCounter;