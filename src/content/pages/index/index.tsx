import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CardNegocios from "./components/card";
import Header from "./components/header";
import player from "../../images/player.png"
export default function Index() {
    return (
        <div className="text-center md:start">

            <section className="main h-[800px]">
                <Header />
                <div className="text-white flex items-start justify-center gap-20 mt-10">
                    <div className="text-center md:text-start">
                        <span className="poppins-thin hidden md:block">Bem-vindo à Transit!</span>
                        <h1 className="lilita md:text-[2rem]  text-[1.5rem] md:w-[180px] font-black">
                            Transformando ações em oportunidades
                        </h1>
                        <p className=" max-w-[550px] ">
                            Lorem ipsum dolor sit amet. Ex voluptatem sequi ex ipsam distinctio quo laboriosam dolor vel possimus laborum non modi
                            nihil. Et praensentium nihil ut aperiam quis qui impedit expedita est sunt officia.
                            Eos earum sunt ut quod suscipit ut doloremque quibusdam.
                        </p>
                        <button className="bg-white text-purple-700 font-bold p-2 rounded-lg text-[1.2rem] mt-4 shadow-[-10px_-4px_6px_0px_rgba(0,_0,_0,_0.1)]">Saiba mais</button>

                    </div>
                    <div className="relative flex ">
                        <img src="https://www.ipnet.cloud/blog/wp-content/uploads/2023/06/imagem-de-close-up-de-programador-trabalhando-em-sua-mesa-no-escritorio.webp"
                            alt=""
                            className="  hidden lg:block h-[400px] w-[200px] rounded-xl shadow-[-10px_-4px_20px_0px_rgba(0,_0,_0,_0.5)]"
                        />
                        <img src="https://img.lovepik.com/bg/20231221/Dark-Computer-Screen-Background-with-Person-Typing_2661511_wh860.jpg!/fw/860"
                            className=" hidden  lg:block h-[300px] w-[300px] rounded-xl absolute z-10 translate-x-[100px] translate-y-[50px] shadow-[-10px_-4px_28px_2px_rgba(0,_0,_0,_0.5)]" />
                    </div>
                </div>
            </section>
            <section className="hidden lg:flex translate-y-[-180px]  items-start justify-center">
                <div>
                    <h2 className="font-bold md:text-[2rem]  text-[1.5rem] w-[450px]">
                        Melhores oportunidades de negócios para você
                    </h2>
                    <p className=" max-w-[440px] ">
                        Lorem ipsum dolor sit amet. Ex voluptatem sequi ex ipsam distinctio quo laboriosam dolor vel possimus laborum non modi
                        nihil. Et praensentium nihil ut aperiam quis qui impedit expedita est sunt officia.
                        Eos earum sunt.
                    </p>
                </div>
                <div className=" flex-wrap gap-10 w-[500px] hidden lg:flex">
                    <CardNegocios
                        title={"Cursos profissionais"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod egestas odio sapien dis massa massa massa."}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" /></svg>}
                        color={"purple"} />
                    <CardNegocios
                        title={"Cursos profissionais"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod egestas odio sapien dis massa massa massa."}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" /></svg>}
                        color={"purple"} />
                    <CardNegocios
                        title={"Cursos profissionais"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod egestas odio sapien dis massa massa massa."}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" /></svg>}
                        color={"purple"} />
                    <CardNegocios
                        title={"Cursos profissionais"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod egestas odio sapien dis massa massa massa."}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" /></svg>}
                        color={"purple"} />
                </div>
            </section>
            <section className="oportunidades bg-cover h-[500px] p-4 translate-y-[-200px] flex items-center justify-center">
                <DotLottieReact
                    src="https://lottie.host/0d64dfb0-bc0f-4a53-91bd-536dae2de6a9/cChq7ULwvr.lottie"
                    loop
                    autoplay
                    className="w-[800px] translate-x-[-30px]  hidden lg:block"
                />
                <div className="lg:translate-x-[-50px]">
                    <h2 className="font-bold md:text-[2rem]  text-[1.5rem] w-[450px]">
                        Melhores oportunidades de negócios para você
                    </h2>
                    <p className=" max-w-[440px] ">
                        Lorem ipsum dolor sit amet. Ex voluptatem sequi ex ipsam distinctio quo laboriosam dolor vel possimus laborum non modi
                        nihil. Et praensentium nihil ut aperiam quis qui impedit expedita est sunt officia.
                        Eos earum sunt.
                    </p>
                </div>
            </section>
            <section className=" rotate-180 oportunidades bg-cover h-[500px] p-4 translate-y-[-200px] flex items-center justify-center">
                <div className="rotate-180  bg-coverflex flex flex-row-reverse items-center justify-center">
                    <DotLottieReact
                        src="https://lottie.host/3481a907-5471-4641-ba49-5056961655b6/h58K070IRb.lottie"
                        loop
                        autoplay
                        className="w-[800px] translate-x-[30px]  hidden lg:block"
                    />
                    <div className="lg:translate-x-[50px]">
                        <h2 className="font-bold md:text-[2rem]  text-[1.5rem] w-[450px]">
                            Melhores oportunidades de negócios para você
                        </h2>
                        <p className=" max-w-[440px] ">
                            Lorem ipsum dolor sit amet. Ex voluptatem sequi ex ipsam distinctio quo laboriosam dolor vel possimus laborum non modi
                            nihil. Et praensentium nihil ut aperiam quis qui impedit expedita est sunt officia.
                            Eos earum sunt.
                        </p>
                    </div>
                </div>
            </section>
            <section className="translate-y-[-130px]">
                <h2 className="font-bold md:text-[2rem]  text-[1.5rem] text-center">
                    Conheça nosso alcance e tire suas conclusôes
                </h2>
                <img src={player} alt="" className="w-[400px] md:w-[600px] h-[250px] md:h-[350px] m-auto mt-16" />
            </section>
        </div>
    )
}