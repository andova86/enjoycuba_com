import Image from 'next/image'
import Link from 'next/link'


const Viajero_card = (props) => {


    return (

        <div className="card has-background-grey-lighter" key={props.id}>
            <div className="card-content">
                <div className="content">
                    <h6 className="title">{props.title}</h6>
                    <hr />
                    <p>{props.text}</p>
                </div>
                <div className="media avatar pl-6 pr-6">
                    <div className="media-left">

                        <Image className="img-rounded"
                            src={props.user_img}
                            alt={props.user_name} width={32} height={32} />

                    </div>
                    <div className="media-content ">
                        <h5 className="name">{props.user_name}</h5>
                        <p className="date">{props.date}</p>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Viajero_card;