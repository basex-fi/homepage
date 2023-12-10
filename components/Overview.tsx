import { gql } from "@apollo/client";
import { getClient } from "@/app/client";

const monthlyVolumeQuery = gql`
  query MonthlyVolume {
    uniswapDayDatas(orderBy: date, orderDirection: desc) {
      date
      volumeUSD
      txCount
    }
  }
`;

const totalValueLockedQuery = gql`
  query TotalValueLockedQuery {
    factories {
      id
      totalValueLockedUSD
    }
  }
`;

export default async function Overview() {
  const {
    data: { uniswapDayDatas: monthlyVolumeData },
  } = await getClient().query<{
    uniswapDayDatas: { date: number; volumeUSD: string; txCount: string }[];
  }>({
    query: monthlyVolumeQuery,
  });

  const {
    data: {
      factories: [totalValueLockedData],
    },
  } = await getClient().query<{
    factories: { id: number; totalValueLockedUSD: string }[];
  }>({
    query: totalValueLockedQuery,
  });

  const monthlyVolume = monthlyVolumeData
    .slice(0, 30)
    .reduce((total, item) => (total += Number(item.volumeUSD)), 0);

  return (
    <div className="bg-primary mt-6">
      <div className="grid lg:grid-cols-3 container auto-cols-auto max-w-6xl">
        <div className="flex items-center flex-col lg:py-8 py-6 gap-1 border-b border-border/30 lg:border-0">
          <p className="text-background text-2xl font-bold">
            {monthlyVolume.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <span className="text-background/60">30 day volume</span>
        </div>
        <div className="flex items-center flex-col lg:py-8 py-6 gap-1 border-b border-border/30 lg:border-0">
          <p className="text-background text-2xl font-bold">
            {Number(totalValueLockedData.totalValueLockedUSD).toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
              }
            )}
          </p>
          <span className="text-background/60">Total value locked</span>
        </div>
        <div className="flex items-center flex-col lg:py-8 py-6 gap-1">
          <p className="text-background text-2xl font-bold">
            {monthlyVolumeData.length > 0
              ? monthlyVolumeData.length > 1
                ? Number(monthlyVolumeData[0].txCount) -
                  Number(monthlyVolumeData[1].txCount)
                : Number(monthlyVolumeData[0].txCount)
              : 0}
          </p>
          <span className="text-background/60">24h trades</span>
        </div>
      </div>
    </div>
  );
}
