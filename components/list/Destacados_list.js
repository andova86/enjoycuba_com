import Destacado_card from "../cards/Destacado_card";
import Link from "next/link";
import { setInfo } from "../../redux/actions/main";
import { connect } from "react-redux";


const DestacadosList = (props) => {

    // const { userInfo } = props;

    function f() {
        if (props.listDestacados > 0) {

        }
        else {

        }
    }


    const handleSearch = (e) => {
        console.log(e);
    }

    return (
        <div className='columns has-background-grey-lighter custom-background is-justify-content-center is-multiline'>

            <div className='column is-12'>
                <h2 className="header has-text-weight-normal has-text-centered">{props.category} Destacados</h2>
                {/* <p className="title_section mb-0">{userInfo.name} destacados</p> */}
            </div>

            <div className='column is-12'>
                <div className='destacado_list scroll'>
                    {
                        props.listDestacados.map(
                            (item) =>
                                <Destacado_card
                                    img={item.img}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    value={item.value}
                                    text={item.text}
                                    slug={item.slug}
                                    key={item.id}
                                />
                        )
                    }
                </div>
            </div>

            <div className='column is-12 p-1'>
                <Link href="/category/[name]" as={`/category/${props.category}`}>
                    <a className="has-text-blue-dark is-underline">
                        <h4 className="link has-text-blue-dark mb-4 txt-center">Ver todos {props.category} »</h4>
                    </a>
                </Link>
            </div>
        </div>
    )
};


/*const mapStateToProps = state => ({
    userInfo: state.main
});

const mapDispatchToProps = {
    setInfo: setInfo
};*/
export default DestacadosList
//export default connect(mapStateToProps, mapDispatchToProps)(DestacadosList)

