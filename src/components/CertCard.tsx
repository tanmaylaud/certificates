import { Button, Card } from "react-bootstrap";
import { useSpring, animated } from 'react-spring';

   
export interface CertCardProps{
    id: number;
    logo:string;
    link:string;
    title:string;
    time:string;
    provider:string;
}
export default function CertCard({id,title,logo,link,time,provider}:CertCardProps){
    const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x: any, y: any, s: any) => `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 350, friction: 40 } }))
    return <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                //@ts-ignore
                style={{ transform: props.xys.interpolate(trans), 
                         boxShadow: "10px 10px 5px grey"}}>
                    <Card key = {id}  bg="light" border="dark">
                    <Card.Header as="h5">
                        <i style={{color:"white"}} >
                        {title}
                        </i>
                    </Card.Header>
                    <Card.Body>
                        <Card.Img src={logo} alt={provider} style={{height:"50%"}}/>
                        <a href={link} target="_blank" rel="noreferrer noopener">
                            <Button block variant="primary" size="lg">
                                <i style={{color:"white"}}>Open</i>
                            </Button> 
                        </a>
                    </Card.Body>
                    <Card.Footer>Issued {time}</Card.Footer>
                </Card>
                </animated.div>
}