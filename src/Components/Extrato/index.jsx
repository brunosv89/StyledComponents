import React from "react";
import { Box } from "../UI";
import { extratoLista } from "../../info";
import { Button } from "../UI";
import Itens from "../Itens";

export const Extrato = () => {
  return (
    <>
      <Box>
        {extratoLista.updates.map(({ id, type, from, value, date }) => {
          return (
            <>
            <div key={id}>
            </div>
            <Itens key={id} type={type} from={from} value={value} date={date} />
            </>
          );
        })}
      <Button>Ver Mais</Button>
      </Box>
    </>
  );
};
