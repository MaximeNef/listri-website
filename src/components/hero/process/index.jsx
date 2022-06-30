import Image from "next/image";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const Process = () => {
  const Etape = [
    {
      id: "rocket1",
      description: "vefvdzsdfvsfd",
      img: "/assets/logo/rocket1.svg",
      imgHover: "/assets/logo/rocket1.svg",
    },
    {
      id: "rocket2",
      description: "vefvdzsdfvsfd",
    },
    {
      id: "rocket3",
      description: "vefvdzsdfvsfd",
      img: "/assets/logo/rocket1.svg",
      imgHover: "/assets/logo/rocket1.svg",
    },
    {
      id: "rocket4",
      description: "vefvdzsdfvsfd",
      img: "/assets/logo/rocket1.svg",
      imgHover: "/assets/logo/rocket1.svg",
    },
  ];
  function renderSwitch() {
    return Etape.map((elt) => {
      switch (elt.id) {
        case "rocket1":
          return renderParagraph1();

        case "rocket2":
          return renderParagraph2();

        case "rocket3":
          return renderParagraph3();

        case "rocket4":
          return renderParagraph4();

        default:
          console.log("rocket 1");
      }
    });
  }
  const handleClick = () => {
    renderSwitch();
  };

  function renderParagraph1() {
    return (
      <Container className='my-[8px] !text-[16px] w-[270px] md:w-full md:my-2'>
        roocket1
      </Container>
    );
  }
  function renderParagraph2() {
    return (
      <Container className='my-[8px] !text-[16px] w-[270px] md:w-full md:my-2'>
        rocket2
      </Container>
    );
  }
  function renderParagraph3() {
    return (
      <Container className='my-[8px] !text-[16px] w-[270px] md:w-full md:my-2'>
        ROCKET3
      </Container>
    );
  }
  function renderParagraph4() {
    return (
      <Container className='my-[8px] !text-[16px] w-[270px] md:w-full md:my-2'>
        defvs
      </Container>
    );
  }

  return (
    <Container className='w-full mt-40 hidden lg:inline-flex'>
      <Flex justify='center' align='center' className=' '>
        <Container className='w-2/5 h-full text-center'>
          <Container>
            {renderSwitch()}
            <Container>
              <p> Processus de création </p>
            </Container>
            <Container>
              <p> de votre projet </p>
            </Container>
          </Container>
          <Container>
            <p> {Etape.description}</p>
          </Container>
        </Container>

        <Container className='w-3/5 relative h-screen'>
          <Container className='absolute h-screen '>
            <Image
              src='/assets/logo/ProcessCircle.svg'
              alt='Picture of the author'
              width={500}
              height={500}
              className=''
            />
            <Container
              className='absolute right-[190px] top-[-70px] '
              onClick={(e) => handleClick(e, "1")}
            >
              <Image
                src='/assets/logo/rocket1.svg'
                alt='Picture of the author'
                width={130}
                height={130}
                className=''
                defaultValue={"1"}
              />
            </Container>{" "}
            <Container
              className='absolute  right-[-55px] top-[185px]'
              onClick={(e) => handleClick(e, "2")}
            >
              <Image
                src='/assets/logo/rocket1.svg'
                alt='Picture of the author'
                width={130}
                height={130}
                className=''
              />
            </Container>{" "}
            <Container
              className='absolute bottom-[320px] right-[190px]'
              onClick={(e) => handleClick(e, "3")}
            >
              <Image
                src='/assets/logo/rocket1.svg'
                alt='Picture of the author'
                width={130}
                height={130}
                className=''
              />
            </Container>{" "}
            <Container
              className='absolute top-[185px] left-[-70px] '
              onClick={(e) => handleClick(e, "4")}
            >
              <Image
                src='/assets/logo/rocket1.svg'
                alt='Picture of the author'
                width={130}
                height={130}
                className=''
              />
            </Container>
          </Container>
        </Container>
      </Flex>
    </Container>
  );
};
export default Process;
