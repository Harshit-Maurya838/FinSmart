// app/(main)/account/page.jsx

import { getDashboardData, getUserAccounts } from "@/actions/dashboard";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";
import { AccountCard } from "../dashboard/_components/account-card";

const AccountMainPage = async () => {
  try {
    const [accounts, transactions] = await Promise.all([
      getUserAccounts(),
      getDashboardData(),
    ]);

    return (
      <>
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-6xl font-bold tracking-tight gradient-title">
            Accounts
          </h1>
        </div>

        <div>
          {/* Accounts Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CreateAccountDrawer>
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
                <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
                  <Plus className="h-10 w-10 mb-2" />
                  <p className="text-sm font-medium">Add New Account</p>
                </CardContent>
              </Card>
            </CreateAccountDrawer>
            {accounts.length > 0 ? (
              accounts.map((account) => (
                <AccountCard key={account.id} account={account} />
              ))
            ) : (
              <p className="text-muted-foreground text-center">
                No accounts found. Create a new account to get started.
              </p>
            )}
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching accounts:", error);
    return <p className="text-red-500">Failed to load accounts.</p>;
  }
};

export default AccountMainPage;
