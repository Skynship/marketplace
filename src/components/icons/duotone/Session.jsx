import { SvgIcon } from "@mui/material";
const Session = props => {
  return <SvgIcon viewBox="0 0 20 18" sx={{
    "& .secondary": {
      opacity: 0.4
    }
  }} {...props}>
      <path d="M12.1184 8.49023L7.05234 13.2715C6.80713 13.5027 6.44766 13.5659 6.13828 13.433C5.82891 13.2996 5.62852 12.9937 5.62852 12.6562V10.125H1.1257C0.503789 10.125 0 9.62226 0 9V6.75C0 6.12879 0.503789 5.625 1.1257 5.625H5.62922V3.09375C5.62922 2.75703 5.82986 2.45215 6.13934 2.31856C6.44882 2.18563 6.80836 2.24881 7.0534 2.48006L12.1194 7.26131C12.4559 7.57969 12.4559 8.17031 12.1184 8.49023Z" />
      <path d="M14.625 0H12.375C11.7538 0 11.25 0.503789 11.25 1.125C11.25 1.74621 11.7538 2.25 12.375 2.25H14.625C15.2462 2.25 15.75 2.75379 15.75 3.375V12.375C15.75 12.9962 15.2462 13.5 14.625 13.5H12.375C11.7538 13.5 11.25 14.0038 11.25 14.625C11.25 15.2462 11.7538 15.75 12.375 15.75H14.625C16.489 15.75 18 14.239 18 12.375V3.375C18 1.51102 16.4883 0 14.625 0Z" className="secondary" />
    </SvgIcon>;
};
export default Session;