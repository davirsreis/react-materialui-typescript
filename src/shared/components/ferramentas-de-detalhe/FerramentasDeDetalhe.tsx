import { Box, useTheme, Paper, Icon, Button, Divider, Skeleton, Typography, useMediaQuery } from '@mui/material';

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEVoltar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEVoltarCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEVoltar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEVoltar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEVoltarCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEVoltar,

}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm')); // 600px
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (<Button
        color='primary'
        disableElevation
        variant='contained'
        onClick={aoClicarEmSalvar}
        startIcon={<Icon>save</Icon>}
      >
        <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          Salvar
        </Typography>
      </Button>)}

      {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60} />)}

      {(mostrarBotaoSalvarEVoltar && !mostrarBotaoSalvarEVoltarCarregando && !smDown && !mdDown) && (<Button
        color='primary'
        disableElevation
        variant='outlined'
        onClick={aoClicarEmSalvarEVoltar}
        startIcon={<Icon>save</Icon>}
      >
        <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          Salvar e voltar
        </Typography>
      </Button>)}

      {(mostrarBotaoSalvarEVoltarCarregando && !smDown && !mdDown) && (<Skeleton width={180} height={60} />)}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (<Button
        color='primary'
        disableElevation
        variant='outlined'
        onClick={aoClicarEmApagar}
        startIcon={<Icon>delete</Icon>}
      >
        <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          Apagar
        </Typography>
      </Button>)}

      {mostrarBotaoApagarCarregando && (<Skeleton width={110} height={60} />)}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (<Button
        color='primary'
        disableElevation
        variant='outlined'
        onClick={aoClicarEmNovo}
        startIcon={<Icon>add</Icon>}
      >
        <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          {textoBotaoNovo}
        </Typography>
      </Button>)}

      {(mostrarBotaoNovoCarregando && !smDown) && (<Skeleton width={100} height={60} />)}

      {
        (
          mostrarBotaoVoltar &&
          (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEVoltar)
        ) && (
          <Divider variant='middle' orientation='vertical'></Divider>
        )
      }

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (<Button
        color='primary'
        disableElevation
        variant='outlined'
        onClick={aoClicarEmVoltar}
        startIcon={<Icon>arrow_back</Icon>}
      >
        <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          Voltar
        </Typography>
      </Button>)}

      {mostrarBotaoVoltarCarregando && (<Skeleton width={110} height={60} />)}
    </Box>
  );
};