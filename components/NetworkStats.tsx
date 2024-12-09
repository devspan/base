'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { formatNumber } from '@/lib/utils'

interface NetworkStatsData {
  totalTxs?: number
  averageBlockTime?: number
  gasPrice?: string
  latestBlock?: number
}

export function NetworkStats() {
  const [stats, setStats] = useState<NetworkStatsData>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const statsRes = await fetch('/api/stats', {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json'
          }
        });

        clearTimeout(timeoutId);

        if (!statsRes.ok) {
          throw new Error('API response was not ok');
        }

        const statsData = await statsRes.json();

        setStats({
          totalTxs: parseInt(statsData.total_transactions) || 0,
          averageBlockTime: statsData.average_block_time ? statsData.average_block_time / 1000 : 0,
          gasPrice: '0',
          latestBlock: parseInt(statsData.total_blocks) || 0
        });
      } catch (error) {
        console.error('Error fetching network stats:', error);
        // Add error state if needed
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <NetworkStatsSkeletons />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Transactions"
        value={formatNumber(stats.totalTxs)}
      />
      <StatCard
        title="Latest Block"
        value={formatNumber(stats.latestBlock)}
      />
      <StatCard
        title="Average Block Time"
        value={`${stats.averageBlockTime?.toFixed(2)}s`}
      />
      <StatCard
        title="Gas Price"
        value={`${Number(stats.gasPrice).toFixed(2)} Gwei`}
      />
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

function NetworkStatsSkeletons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <Card key={i}>
          <CardHeader className="pb-2">
            <Skeleton className="h-4 w-[100px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-[120px]" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 