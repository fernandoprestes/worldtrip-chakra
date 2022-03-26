import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = function SliderComponent() {
  return (
    <Flex
      w='100%'
      maxW='1240px'
      mx='auto'
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{ width: "100%", flex: "1" }}
      >
        <SwiperSlide>
          <Flex
            w='100%'
            h='100%'
            align='center'
            justify='center'
            direction='column'
            bgImage='url(/europe.png)'
            bgPosition='center'
            bgRepeat='no-repeat'
            bgSize='cover'
            textAlign='center'
          >
            <Link href='/continent/europe'>
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  fontWeight='700'
                  color='gray.100'
                >
                  Europa
                </Heading>
                <Text
                  color='gray.300'
                  fontWeight='500'
                  fontSize={[".8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O velho continente
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export { Slider };
