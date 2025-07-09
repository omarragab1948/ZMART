import Container from "@/components/shared/Container/Container";
import Divider from "@/components/shared/Divider/Divider";
import Button from "@/design-system/components/Buttons/Button";
import { Grid } from "@/design-system/components/Grid/Grid";
import { GridItem } from "@/design-system/components/Grid/GridItem";
import { EmailInput } from "@/design-system/components/Inputs/Input";
import Typography from "@/design-system/components/Typography/Typography";
import { Link } from "react-router";
import { beautyLinks, electronicsLinks, fashionLinks, paymentMethods, socialIcons, topBrands } from "./data";

const Footer = () => {
  return (
    <footer className="bg-[#F2F0F1] py-4 mt-40 ">
      <Container>
        <div className="bg-black relative -top-28 h-[293px] md:h-[180px] w-full pb-6 pt-3 px-5 md:px-20 rounded-3xl">
          <Grid columns={12} className="h-full">
            <GridItem span={12} md={6}>
              <Typography
                as="h3"
                className="text-white flex flex-col h-full items-center justify-center font-bold text-[24px] sm:text-[27px] md:text-[30px] lg:text-[34px] xl:text-[40px]"
              >
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </Typography>
            </GridItem>
            <GridItem span={12} md={6}>
              <div className="flex flex-col gap-4 h-full items-center justify-center">
                <EmailInput
                  placeholder="Enter your email address"
                  className="bg-white"
                  id="emil"
                />
                <Button
                  variant="secondary"
                  size="responsive"
                  className="max-w-[350px] !w-full !h-[48px]"
                >
                  test
                </Button>
              </div>
            </GridItem>
          </Grid>
        </div>
        <Grid columns={10} gap={8} className="relative -top-12">
          <GridItem span={12} md={3} lg={2}>
            <div className="flex flex-col gap-8">
              <Typography variant="display">ZMART</Typography>
              <Typography variant="body">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </Typography>
              <div className="flex gap-4">
                {socialIcons.map((icon, index) => (
                  <div
                    key={index}
                    className={`w-9 h-9 rounded-full ${icon.bg} flex justify-center items-center ${icon.padding}`}
                  >
                    <img src={icon.src} alt={icon.alt} className="w-full" />
                  </div>
                ))}
              </div>
            </div>
          </GridItem>
          <GridItem span={6} sm={5} md={3} lg={2}>
            <div className="flex flex-col gap-4 items-center">
              <Typography variant="label">FASHION</Typography>
              {electronicsLinks.map((item) => (
                <Link to={item.href} key={item.label}>
                  <Typography
                    variant="body"
                    className="after:content-[''] after:origin-left after:block inline-block relative after:h-[1px] after:scale-x-0 after:bg-black hover:after:scale-x-100 after:transition-transform duration-300 cursor-pointer"
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </div>
          </GridItem>
          <GridItem span={6} sm={5} md={3} lg={2}>
            <div className="flex flex-col gap-4 items-center">
              <Typography variant="label">Top BRANDS</Typography>
              {fashionLinks.map((item) => (
                <Link to={item.href} key={item.label}>
                  <Typography
                    variant="body"
                    className="relative inline-block after:content-[''] after:block after:h-[1px] after:bg-black after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </div>
          </GridItem>
          <GridItem span={6} sm={5} md={3} lg={2}>
            <div className="flex flex-col gap-4 items-center">
              <Typography variant="label">Top BRANDS</Typography>
              {topBrands.map((item) => (
                <Link to={item.href} key={item.label}>
                  <Typography
                    variant="body"
                    className="relative inline-block after:content-[''] after:block after:h-[1px] after:bg-black after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </div>
          </GridItem>
          <GridItem span={6} sm={5} md={3} lg={2}>
            <div className="flex flex-col gap-4 items-center">
              <Typography variant="label">BEAUTY</Typography>
              {beautyLinks.map((item) => (
                <Link to={item.href} key={item.label}>
                  <Typography
                    variant="body"
                    className="relative inline-block after:content-[''] after:block after:h-[1px] after:bg-black after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </div>
          </GridItem>
        </Grid>
        <Divider />
        <Grid columns={12} gap={8} className="my-8">
          <GridItem span={12} md={6}>
            <Typography className="text-center md:text-start">
              ZMART.co © 2000-2025, All Rights Reserved
            </Typography>
          </GridItem>
          <GridItem
            span={12}
            md={6}
            className="flex justify-center md:justify-end gap-6"
          >
            {paymentMethods.map(({ src, alt }, index) => (
              <div
                key={index}
                className="w-11 h-8 bg-white rounded-md flex justify-center items-center p-1"
              >
                <img src={src} alt={alt} className="w-full bg-transparent" />
              </div>
            ))}
          </GridItem>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
