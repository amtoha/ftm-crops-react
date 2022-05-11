import { metaMask } from "./connectors";
import { defaultChain } from "./chains";
import { store } from "../app/store";
import {
  setClaimTimer,
  setCompoundTimer,
  setCooldownTimer,
  setReinvestAttr,
  setWithdrawAttr,
} from "../app/contractSlice";

export const switchChain = async () => {
  await metaMask.activate(defaultChain);
};

let y;
export const startCutoffTimer = (lastHatch, cutoffStep) => {
  const time = new Date().getTime();
  const now = time / 1000;
  const cutOffDiff = +lastHatch + +cutoffStep - now;
  const cutoff = +lastHatch + +cutoffStep - +time / 1000;
  const countDownDate = new Date(+time + +cutoff * 1000).getTime();

  if (cutOffDiff > 0) {
    clearInterval(y);
    y = setInterval(
      function () {
        const currentTime = new Date().getTime();
        const distance = countDownDate - currentTime;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + days * 24
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        store.dispatch(setClaimTimer(`${hours}h:${minutes}m:${seconds}s`));

        if (distance < 0) {
          clearInterval(y);
          store.dispatch(setClaimTimer("00:00:00"));
        }
      },
      1000,
      1
    );
  } else {
    store.dispatch(setClaimTimer("00:00:00"));
  }
};

let x;
export function startCompoundTimer(lastHatch, compoundStep) {
  store.dispatch(setReinvestAttr(true));
  const now = new Date().getTime();
  const diff = +lastHatch + +compoundStep - now / 1000;
  const countDownDate = new Date(+now + +diff * 1000).getTime();
  if (diff > 0) {
    clearInterval(x);
    x = setInterval(
      function () {
        const currTime = new Date().getTime();
        const distance = countDownDate - currTime;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + days * 24
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        store.dispatch(setCompoundTimer(`${hours}h:${minutes}m:${seconds}s`));

        if (distance < 0) {
          store.dispatch(setCompoundTimer("00:00:00"));
          store.dispatch(setReinvestAttr(false));
        }
      },
      1000,
      1
    );
  } else {
    store.dispatch(setCompoundTimer("00:00:00"));
    store.dispatch(setReinvestAttr(false));
  }
}

let z;
export function startCooldownTimer(lastHatch, withdrawCooldown) {
  const now = new Date().getTime();
  const coolDownDiff = +lastHatch + +withdrawCooldown - now;
  if (coolDownDiff > 0) {
    store.dispatch(setWithdrawAttr(true));
    const time = new Date().getTime();
    const endDate = new Date(+time + +withdrawCooldown * 1000).getTime();

    clearInterval(z);
    z = setInterval(
      function () {
        const currTime = new Date().getTime();
        const distance = endDate - currTime;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + days * 24
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        store.dispatch(
          setCooldownTimer(`in ${hours}h:${minutes}m:${seconds}s`)
        );
        if (distance < 0) {
          clearInterval(z);
          store.dispatch(setWithdrawAttr(false));
          store.dispatch(setCooldownTimer(""));
        }
      },
      1000,
      1
    );
  } else {
    store.dispatch(setWithdrawAttr(false));
    store.dispatch(setCooldownTimer(""));
  }
}
