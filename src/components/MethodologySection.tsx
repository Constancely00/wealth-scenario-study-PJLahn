
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Table, TableBody, TableRow, TableCell } from './ui/table';

const MethodologySection: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-wiw-light-blue/10 border-wiw-light-blue">
        <CardContent className="pt-6">
          <h2 className="text-xl font-serif font-semibold text-wiw-dark-blue mb-4">Methodology</h2>
          
          <p className="text-gray-700 mb-4">
            All data and financial inputs were supplied by the client. These included estimates of current income, expenses, savings, investments, real estate, liabilities, and lifestyle goals. The direction of the scenario modeling was guided by the client's questions and decision points.
          </p>
          
          <h3 className="font-medium text-wiw-dark-blue mb-2">Home Equity Gain</h3>
          <p className="text-gray-700 mb-4">
            This calculation uses an annual home equity growth rate to estimate how the value of a home may appreciate over time. This assumption provides a conservative yet realistic projection based on historical housing market trends. This is used to model the impact of home appreciation on long-term net worth, potential borrowing power, or future downsizing opportunities, while keeping expectations grounded in a moderate growth environment.
          </p>
          
          <h3 className="font-medium text-wiw-dark-blue mb-2">Investment Assumptions</h3>
          <p className="text-gray-700 mb-4">
            All investment growth shown in these scenarios is based on nominal returns, which reflect total growth before adjusting for inflation. This means that while your investment accounts may appear to grow over time, the real purchasing power of that money will grow more slowly — closer to 3%–3.5% per year in today's dollars.
          </p>
        
          <h3 className="font-medium text-wiw-dark-blue mb-2">Inflation Assumptions</h3>
          <p className="text-gray-700">
            This analysis assumes a general inflation rate for non-healthcare expenses. This range reflects long-term historical averages and provides a realistic planning baseline. It accounts for typical cost-of-living increases in areas like housing, groceries, transportation, and everyday goods and services.
          </p>
          
          <p className="text-gray-700 mt-4">
            Healthcare inflation was modeled separately as it tends to grow at a faster rate than overall inflation.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-wiw-light-blue/5 to-white border-2 border-wiw-dark-blue/20 shadow-lg">
        <CardContent className="pt-6">
          <h2 className="text-xl font-serif font-semibold text-wiw-dark-blue mb-4">
            Pam's Scenario Assumptions
          </h2>
          
          <Table className="w-full max-w-xl mx-auto bg-white">
            <TableBody>
              <TableRow>
                <TableCell className="text-gray-700 font-medium bg-gray-50 w-3/4">Annual Home Equity Gain</TableCell>
                <TableCell className="text-right font-medium text-wiw-dark-blue w-1/4">3.0%</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell className="text-gray-700 font-medium bg-gray-50">Investment Returns</TableCell>
                <TableCell className="text-right font-medium text-wiw-dark-blue">5.0%</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell className="text-gray-700 font-medium bg-gray-50">Inflation</TableCell>
                <TableCell className="text-right font-medium text-wiw-dark-blue">2.8%</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell className="text-gray-700 font-medium bg-gray-50">Healthcare Inflation</TableCell>
                <TableCell className="text-right font-medium text-wiw-dark-blue">4.0%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MethodologySection;
