import React from 'react';

const Courses = () => {
    return (
        <div
        className={`w-[675px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[15px] max-w-full text-left text-xl text-white font-radio-canada `}
      >
        <div className="w-[615px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[13px] max-w-full text-mini text-skyblue">
          <div className="flex flex-row items-start justify-start py-0 px-2">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[73px] z-[1]">
                  FISIDEVS
                </a>
              </div>
              <h1 className="m-0 relative text-13xl font-bold font-inherit text-white z-[1] mq450:text-lgi mq925:text-7xl">
                Software Academy
              </h1>
            </div>
          </div>
          <div className="self-stretch rounded-7xl [background:linear-gradient(174.27deg,_#fdfffe_42.5%,_#b5fbfe_85%)] flex flex-row items-start justify-start max-w-full z-[1] text-xs text-royalblue font-quicksand">
            <img
              className="self-stretch w-[595px] relative rounded-7xl max-h-full hidden min-h-[142px] max-w-full"
              alt=""
              src="/rectangle-1.svg"
            />
            <div className="flex-1 rounded-7xl [background:linear-gradient(174.27deg,_#fdfffe_42.5%,_#b5fbfe_85%)] flex flex-row flex-wrap items-end justify-start pt-[22px] px-[31px] pb-[23px] box-border gap-[29px] max-w-full z-[2]">
              <img
                className="h-[142px] w-[595px] relative rounded-7xl hidden max-w-full"
                alt=""
                src="/rectangle-1.svg"
              />
              <img
                className="h-[97px] w-[97px] relative object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/icon@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border min-w-[259px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                  <p className="m-0 self-stretch relative font-medium z-[1]">
                    Somos una comunidad académica sin fines de lucro potenciando
                    talento de universitarios, egresados e interesados en Data
                    Science, IA y Programación
                  </p>
                  <b className="self-stretch relative text-darkslateblue z-[1]">
                    inicio de clases: 23/05/06
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[226px] max-w-full text-base font-quicksand mq700:gap-[56px] mq925:flex-wrap mq925:gap-[113px]">
          <div className="w-[595px] flex flex-col items-start justify-start gap-[30px] shrink-0 [debug_commit:bf4bc93] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq700:flex-wrap">
              <div className="rounded-3xl flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_1px_#36699f_inset] [background:linear-gradient(154.2deg,_#013b77_47.5%,_#001248)] flex flex-col items-end justify-start py-7 px-4 box-border gap-[15px] min-w-[201px] z-[1]">
                <img
                  className="w-[309px] h-[282px] relative rounded-7xl hidden"
                  alt=""
                  src="/rectangle-2.svg"
                />
                <div className="w-[267.1px] h-[139px] flex flex-row items-start justify-start gap-[14px]">
                  <div className="h-[139px] w-[118.5px] relative z-[1] flex items-center justify-center">
                    <img
                      className="h-full w-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.572)]"
                      loading="lazy"
                      alt=""
                      src="/monigote-2-1@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-[7px]">
                      <b className="flex-1 relative font-bold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
                        Comunidad
                      </b>
                    </div>
                    <a className="[text-decoration:none] self-stretch relative text-xs font-semibold font-raleway text-cornflowerblue whitespace-pre-wrap [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
                      Puedes unirte a nuestra comunidad y mantenerte al dia
                      siguiendo este link de wsp
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end py-0 px-[7px]">
                  <button className="cursor-pointer [border:none] py-4 px-[75px] bg-[transparent] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_1px_0.2px_#e5eca9_inset] rounded-xl [background:linear-gradient(174.48deg,_#fdd257_25.5%,_#fd9e45_68%)] flex flex-row items-start justify-start z-[1]">
                    <img
                      className="h-[72px] w-[249.7px] relative rounded-xl hidden"
                      alt=""
                      src="/rectangle-6.svg"
                    />
                    <b className="relative text-13xl tracking-[-0.03em] font-bold font-quicksand text-white text-left inline-block min-w-[99px] z-[1] mq450:text-lgi mq925:text-7xl">
                      Unirse
                    </b>
                  </button>
                </div>
              </div>
              <div className="w-[266px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[266px] mq700:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                  <div className="rounded-3xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_2px_1px_#36699f_inset]  [background:linear-gradient(183.5deg,_#013b77_14%,_#012356)] flex flex-col items-start justify-start pt-[26px] px-[57px] pb-[23.9px] gap-[21px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <img
                      className="w-[266px] h-[134px] relative rounded-7xl hidden"
                      alt=""
                      src="/rectangle-3.svg"
                    />
                    <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-[3px]">
                      <b className="relative font-bold z-[2]">
                        Cursos disponibles
                      </b>
                    </div>
                    <button className="cursor-pointer [border:none] pt-2.5 pb-[9.1px] pr-[57px] pl-[62px] bg-[transparent] shadow-[0px_4px_5px_rgba(0,_0,_0,_0.6),_0px_1px_0.2px_#e8b9d9_inset] rounded-lgi [background:linear-gradient(174.48deg,_#f47190_23%,_#f47190_48%,_#d41f43)] flex flex-row items-start justify-start z-[2]">
                      <img
                        className="h-[43.1px] w-[150.7px] relative rounded-lgi hidden"
                        alt=""
                        src="/rectangle-61.svg"
                      />
                      <b className="relative text-xl font-bold font-radio-canada text-white text-center inline-block min-w-[31px] z-[1] mq450:text-base">
                        ver
                      </b>
                    </button>
                  </div>
                  <div className="rounded-3xl self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_1px_0.2px_#1cf2fd_inset]  [background:linear-gradient(180deg,_#03c3ff,_#1a70ce)] flex flex-col items-end justify-start pt-[19px] pb-[29.9px] pr-[42px] pl-10 gap-[17px] z-[1] text-center mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <img
                      className="w-[266px] h-[129px] relative rounded-7xl hidden"
                      alt=""
                      src="/rectangle-62.svg"
                    />
                    <b className="self-stretch relative font-bold z-[2]">
                      Apoyar
                    </b>
                    <div className="flex flex-row items-start justify-end py-0 pr-[13px] pl-5">
                      <button className="cursor-pointer [border:none] pt-2.5 pb-[9.1px] pr-[57px] pl-[62px] bg-[transparent] shadow-[0px_4px_5px_rgba(0,_0,_0,_0.6),_0px_1px_0.2px_#e5eca9_inset] rounded-7xl [background:linear-gradient(174.48deg,_#fed358_26.5%,_#fd9e45_81%)] flex flex-row items-start justify-start z-[2]">
                        <img
                          className="h-[43.1px] w-[150.7px] relative rounded-7xl hidden"
                          alt=""
                          src="/rectangle-63.svg"
                        />
                        <b className="relative text-xl font-bold font-radio-canada text-white text-center inline-block min-w-[31px] z-[1] mq450:text-base">
                          ver
                        </b>
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-3.5 text-5xl font-radio-canada">
              <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-lgi">
                Preguntas frecuentes
              </h1>
            </div>
          </div>
          <div className="w-[113.4px] flex flex-col items-start justify-start pt-80 px-0 pb-0 box-border shrink-0 text-xl">
            <b className="self-stretch h-[25px] relative font-bold inline-block shrink-0 [debug_commit:bf4bc93] mq450:text-base">
              Preguntas
            </b>
          </div>
        </div>
        <div className="w-[596px] flex flex-row items-start justify-start pt-0 px-[13px] pb-[9px] box-border max-w-full">
          <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-7xl [background:linear-gradient(174.48deg,_#19efff_47.5%,_#0dc2ff)] flex flex-row items-start justify-start py-[15px] pr-3 pl-[38px] box-border max-w-full z-[1]">
            <img
              className="h-[54px] w-[570px] relative rounded-7xl hidden max-w-full"
              alt=""
              src="/rectangle-64.svg"
            />
            <b className="flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
              ¿Qué necesito para estudiar con ustedes?
            </b>
          </div>
        </div>
        <div className="w-[585px] flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full text-center">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
            <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-7xl [background:linear-gradient(174.48deg,_#f47191_47.5%,_#fc6484)] flex flex-row items-start justify-start py-[15px] pr-0 pl-[7px] box-border min-w-[216px] whitespace-nowrap max-w-full z-[1]">
              <img
                className="h-[54px] w-[332px] relative rounded-7xl hidden max-w-full"
                alt=""
                src="/rectangle-65.svg"
              />
              <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full z-[1]">
                ¿Quienes dirigen fisidevs?
              </h2>
            </div>
            <button className="cursor-pointer [border:none] py-[15px] pr-0 pl-[7px] bg-[transparent] w-[209px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-7xl [background:linear-gradient(90deg,_#009dfe,_#02a8ff)] flex flex-row items-start justify-start box-border relative z-[1]">
              <img
                className="h-[54px] w-[209px] relative rounded-7xl hidden z-[0]"
                alt=""
                src="/rectangle-66.svg"
              />
              <b className="h-6 w-[205px] absolute !m-[0] top-[calc(50%_-_12px)] right-[-349px] text-xl font-bold font-radio-canada text-white text-center inline-block mq450:text-base">
                Go
              </b>
              <b className="flex-1 relative text-xl font-radio-canada text-white text-center z-[1] mq450:text-base">
                Mas informacion
              </b>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Courses;