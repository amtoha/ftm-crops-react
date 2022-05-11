import { FaChevronDown, FaRegQuestionCircle } from 'react-icons/fa'

const FAQ = () => {
  return (
    <section className="flex flex-col justify-center items-center rounded-md bg-black bg-opacity-80 py-[20px] px-[120px]">
      <h2 className="text-blue text-3xl font-bold !font-[cursive] mb-[15px]">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col mb-12">
        <div className="flex w-full items-center mb-4">
          <FaRegQuestionCircle className="text-blue mr-2 h-[24px] w-[24px]" />
          <h4>What is the FTM Crops Farmers?</h4>
          <FaChevronDown className="h-[16px] w-[16px] rotate-180 ml-auto" />
        </div>
        <p className="opacity-70">
          The FTM Crops Farmer is a decentralized application built on the
          Fantom Chain. The object of the game is to hire more farmers sooner
          and more often than other farmers. This in turn earns you more FTM
          faster. These Farmers work for you tirelessly, giving you a daily
          average of 6% of your farmers' value. The daily percentage return
          depends on farmers' actions that are taken within the platform that
          impact the farmers's efficiency rate. The farming efficiency rate
          rises and falls as users buy Farmers, re-hire your earnings and sell
          your Crops for FTM. Once Farmers are Bought, they cannot be sold, and
          the investment made to re-hire them (either through hire or re-hiring)
          cannot be taken back. However, once bought, Farmers will not stop
          producing yield.
        </p>
      </div>
      <div className="flex flex-col mb-12">
        <div className="flex w-full items-center mb-4">
          <FaRegQuestionCircle className="text-blue mr-2 h-[24px] w-[24px]" />
          <h4>What makes it different from other similar platforms?</h4>
          <FaChevronDown className="h-[16px] w-[16px] rotate-180 ml-auto" />
        </div>
        <p className="opacity-70">
          The FTM Crops Farmer has several anti-dumping and anti-whale measures
          in place to ensure the longevity of the project. These measures
          include maximum deposits, as well as a cutoff time AND a cooldown time
          for withdrawals. The cutoff time is the amount of time it will take
          for your "cart" to be full of rewards. Once the bag is full, it will
          stop filling until you've taken some action in the game. This is to
          prevent whales from letting their rewards accumulate for a long time,
          and removes the false impression the contract value is going up when
          most of it is rewards the whale is waiting to withdraw at once. The
          withdraw cooldown time is the amount of time one has to wait before
          they can make another withdrawal. This also prevents the contract
          balance from decreasing in value too fast. If the team decides it's
          necessary to protect the contract balance, this time period can be
          adjusted to slow down the rate of withdrawals, but it can only be set
          to a value less than or equal to 24 hours (per contract rules). The
          compound count is the number of times the user has compounded. By
          default, the required compound count by the platform is 10, meaning
          the user will have to compound 10 times(compound once every 12 hours)
          before they can withdraw without the feedback tax of 80%. This feature
          in essense will ensure the longevity and stability of the project. To
          reward users who compound, there is a bonus when you re-hire your
          daily crops earnings instead of selling them. The bonus increases 2%
          every 12 hours that you compound without withdrawing (20% max after 5
          days). This incentivizes the user to compound more often, which will
          help boost the farms efficiency rate in the long run. To be able to
          utilize the re-hire bonus feature, the player must not compound before
          the provided timer reaches 00:00:00. For the farmers who choose to not
          play the game and only sell, there will be a 80% tax on those sells
          that will stay in the contract. If the player makes two or more
          consecutive sells, this tax will be applied. The only way for the user
          to not pay the 80% tax is to compound 10 times before making another
          withdrawal. FTM Crops Farmer also has a very unique feature that has
          never been done before which effectively decreases the amount of
          farmers inflation that occurs over a long period of time. Every sell
          action will only add 50% of the amount sold to the total supply. Older
          miner add 100% of what is sold to the total supply. This means the
          contract will have a lower inflation rate, keeping the farmers supply
          more scarce and more valuable than other miner platforms.
        </p>
      </div>
      <div className="flex flex-col mb-12">
        <div className="flex w-full items-center mb-4">
          <FaRegQuestionCircle className="text-blue mr-2 h-[24px] w-[24px]" />
          <h4>How does this platform work?</h4>
          <FaChevronDown className="h-[16px] w-[16px] rotate-180 ml-auto" />
        </div>
        <p className="opacity-70">
          This platform work similarly to a financial market, where an asset has
          intrinsic value that is relative to the supply or demand of said
          asset. Farmers are purchased with a pre-determined currency at a price
          relative to the Farmers's current farming efficiency rate. After the
          Farmers are purchased, they go to work for you right away to give you
          the best yield on your investment possible, for as long as possible.
          Just as any other asset bought and sold on an open market, the price
          of a Farmers will fluctuate over time, as will the farming efficiency
          rate, as you and other farmers recruit Farmers, compound earnings and
          sell earnings. To put it plainly, the more demand for the Farmers, the
          more they will increase in value and the more yield they will produce.
          Inversely, when the demand decreases, so will the value of the Farmers
          and their daily return on investment. The main difference between a
          this game and a traditional financial market is that a recruited
          Farmers cannot be sold, only the value they provide can be sold. As
          the farmers of the game as a whole compound their earnings and make
          new deposits, the game efficiency rate will stay relatively constant,
          but the moment farmers start to sell more than they are compounding,
          the efficiency rate will begin to drop as to preserve the TVL and
          longevity of the game.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full items-center mb-4">
          <FaRegQuestionCircle className="text-blue mr-2 h-[24px] w-[24px]" />
          <h4>What is the recommended strategy?</h4>
          <FaChevronDown className="h-[16px] w-[16px] rotate-180 ml-auto" />
        </div>
        <p className="opacity-70">
          The best strategy that the team can recommend is to re-hire/compound
          for 6 days and harvest 1 day a week. This will increase the users
          investment at the same time increasing the daily yield earnings. This
          strategy has already been tried and tested by several project and is
          proven effective both for the short and long term.
        </p>
      </div>
    </section>
  )
}

export default FAQ
