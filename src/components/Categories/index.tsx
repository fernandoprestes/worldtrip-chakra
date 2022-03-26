import { Grid, GridItem } from "@chakra-ui/react";
import { Category } from "./Category";

const Categories = function CategoriesComponent() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w='100%'
      justifyContent='space-between'
      alignItems='center'
      mt={["10", "32"]}
      mx='auto'
      maxW='1160px'
      gap={[1, 5]}
    >
      <GridItem>
        <Category icon='cocktail' text='Vida Noturna' />
      </GridItem>
      <GridItem>
        <Category icon='surf' text='Praia' />
      </GridItem>
      <GridItem>
        <Category icon='building' text='Moderno' />
      </GridItem>
      <GridItem>
        <Category icon='museum' text='Clássico' />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Category icon='earth' text='E mais ...' />
      </GridItem>
    </Grid>
  );
};

export { Categories };
