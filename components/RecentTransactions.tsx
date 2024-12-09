'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { formatAddress } from '@/lib/utils'
import { formatDistanceToNow } from 'date-fns'
import { ArrowRightIcon, ArrowUpRight, CheckCircle2Icon } from 'lucide-react'
import type { Route } from 'next'

interface Transaction {
  hash: string;
  from: string;
  to: string;
  timeStamp: string;
  value: string;
  isError: string;
}

function TransactionSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-transparent">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-3 w-[160px]" />
          </div>
          <Skeleton className="h-4 w-[100px]" />
        </div>
      ))}
    </div>
  );
}

export function RecentTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const address = '0x18e5b3dee30232CB8a83e4883E17df34d79E7296'; // Rupaya contract address

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`/api/transactions?address=${address}`)
        const data = await response.json()

        if (Array.isArray(data.result)) {
          setTransactions(data.result
            .filter((tx: any): tx is Transaction => 
              typeof tx.hash === 'string' && tx.hash.length > 0 && 
              typeof tx.from === 'string' && tx.from.length > 0 &&
              typeof tx.to === 'string' && tx.to.length > 0 &&
              typeof tx.timeStamp === 'string' && tx.timeStamp.length > 0 &&
              typeof tx.value === 'string' &&
              typeof tx.isError === 'string'
            )
            .slice(0, 5)
          );
        }
      } catch (err) {
        console.error('Error fetching transactions:', err);
        setError('Failed to load recent transactions. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
    // Refresh every 30 seconds
    const interval = setInterval(fetchTransactions, 30000);
    return () => clearInterval(interval);
  }, [address]);

  const formatValue = (value: string) => {
    const amount = parseInt(value) / 1e18; // Convert from wei to RUPX
    return `${amount.toFixed(2)} RUPX`;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl font-semibold">Recent Transactions</CardTitle>
        <a
          href="https://scan.rupaya.io/txs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
        >
          View All
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <TransactionSkeleton />
        ) : error ? (
          <div className="text-red-500 p-4 text-center rounded-lg bg-red-50 dark:bg-red-900/10">
            {error}
          </div>
        ) : transactions.length === 0 ? (
          <div className="text-muted-foreground text-center p-4 rounded-lg bg-muted/50">
            No recent transactions found
          </div>
        ) : (
          <div className="space-y-1">
            {transactions.map((tx) => (
              <div 
                key={tx.hash} 
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <a
                      href={`https://scan.rupaya.io/tx/${tx.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-primary truncate"
                    >
                      {formatAddress(tx.hash)}
                    </a>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(parseInt(tx.timeStamp) * 1000))} ago
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <a
                      href={`https://scan.rupaya.io/address/${tx.from}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate hover:text-primary"
                    >
                      {formatAddress(tx.from)}
                    </a>
                    <ArrowRightIcon className="h-3 w-3 flex-shrink-0" />
                    <a
                      href={`https://scan.rupaya.io/address/${tx.to}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate hover:text-primary"
                    >
                      {formatAddress(tx.to)}
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">
                    {formatValue(tx.value)}
                  </div>
                  <div className={`text-xs ${tx.isError === '0' ? 'text-green-500' : 'text-red-500'}`}>
                    {tx.isError === '0' ? 'Success' : 'Failed'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
} 