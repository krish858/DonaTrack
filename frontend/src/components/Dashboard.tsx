import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWallet } from "@solana/wallet-adapter-react";

// Define types for our data
type Transaction = {
  id: number;
  amount: number;
  date: string;
  type: "Deposit" | "Withdrawal";
};

type Campaign = {
  id: number;
  name: string;
  status: "Active" | "Pending" | "Completed";
};

// Mock data for transactions
const transactions: Transaction[] = [
  { id: 1, amount: 100, date: "2023-05-01", type: "Deposit" },
  { id: 2, amount: 50, date: "2023-05-02", type: "Withdrawal" },
  { id: 3, amount: 75, date: "2023-05-03", type: "Deposit" },
  { id: 4, amount: 25, date: "2023-05-04", type: "Withdrawal" },
  { id: 5, amount: 200, date: "2023-05-05", type: "Deposit" },
];

// Mock data for campaigns
const campaigns: Campaign[] = [
  { id: 1, name: "Summer Sale", status: "Active" },
  { id: 2, name: "New Product Launch", status: "Pending" },
  { id: 3, name: "Holiday Special", status: "Completed" },
  { id: 4, name: "Customer Loyalty Program", status: "Active" },
  { id: 5, name: "End of Season Clearance", status: "Pending" },
];

// Styled components for custom styling
const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const UserInfoCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export default function Main() {
  const {} = useWallet();
  return (
    <div className="w-full h-full pt-2">
      <div className="flex flex-col justify-center h-full bg-black">
        <div className="flex flex-col lg:flex-row mt-16">
          <div className="flex justify-center items-center w-full lg:w-1/3 p-4 ">
            <div className="shadow-[rgba(8,_112,_184,_0.7)_0px_2px_4px_0px,rgba(8,_112,_184,_0.7)_0px_2px_16px_0px]  rounded-lg p-2">
              <UserInfoCard
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  margin: "1px",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  John Doe
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                  sx={{ color: "white" }}
                >
                  johndoe@example.com
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                  Balance: $1,234.56
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Add Funds
                </Button>
              </UserInfoCard>
            </div>
          </div>
          <div className="flex justify-center items-center w-full lg:w-2/3 p-4 mt-8 lg:mt-0">
            <StyledCard
              className="sm:w-[99%] md:w-[75%] max-w-[600px]"
              sx={{
                backgroundColor: "black",
                color: "#3b82f6",
              }}
            >
              <CardHeader title="Recent Transactions" />
              <CardContent>
                <div className="shadow-[rgba(8,_112,_184,_0.7)_0px_2px_4px_0px,rgba(8,_112,_184,_0.7)_0px_2px_16px_0px]  rounded-lg p-2">
                  <TableContainer component={Paper}>
                    <Table
                      aria-label="recent transactions"
                      sx={{ background: "black" }}
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ color: "gray" }}>Date</TableCell>
                          <TableCell sx={{ color: "gray" }}>Type</TableCell>
                          <TableCell align="right" sx={{ color: "gray" }}>
                            Amount
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {transactions.map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell sx={{ color: "white" }}>
                              {transaction.date}
                            </TableCell>
                            <TableCell sx={{ color: "white" }}>
                              {transaction.type}
                            </TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>
                              ${transaction.amount.toFixed(2)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </CardContent>
            </StyledCard>
          </div>
        </div>
        <div className="flex justify-center items-center w-full p-4 mt-20">
          <StyledCard
            className="sm:w-[99%] md:w-[70%] max-w-[780px]"
            sx={{
              backgroundColor: "black",
              color: "#3b82f6",
            }}
          >
            <CardHeader title="Recent Campaigns" />
            <CardContent>
              <div className="shadow-[rgba(8,_112,_184,_0.7)_0px_2px_4px_0px,rgba(8,_112,_184,_0.7)_0px_2px_16px_0px]  rounded-lg p-2">
                <TableContainer component={Paper}>
                  <Table
                    aria-label="recent campaigns"
                    sx={{ background: "black" }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ color: "gray" }}>Name</TableCell>
                        <TableCell sx={{ color: "gray" }}>Status</TableCell>
                        <TableCell sx={{ color: "gray" }}>
                          Donations collected
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {campaigns.map((campaign) => (
                        <TableRow key={campaign.id}>
                          <TableCell sx={{ color: "white" }}>
                            {campaign.name}
                          </TableCell>
                          <TableCell sx={{ color: "white" }}>
                            {campaign.status}
                          </TableCell>
                          <TableCell sx={{ color: "white" }}>0</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </CardContent>
          </StyledCard>
        </div>
      </div>
    </div>
  );
}
