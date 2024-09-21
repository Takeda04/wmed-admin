//todo Import packages
import { useEffect, useState } from "react";

//todo Import axios
import $axios from "../../services";

interface CustomData {
  success: boolean;
}

interface CustomState {
  res: CustomData | null;
  loading: boolean;
}

//! ----------------------------------------------------------------------

export const useFetch = (url: string, reload: number) => {
  const [state, setState] = useState<CustomState>({
    res: null,
    loading: false,
  });

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setState((prev: CustomState) => ({ ...prev, loading: true }));
        const res: CustomData = await $axios.get(url, {
          signal: controller.signal,
        });

        if (res?.success) {
          setState((prev: CustomState) => ({ ...prev, res: res }));
        }

        //!
      } catch (err: unknown) {
        console.log(err);
      } finally {
        setState((prev: CustomState) => ({ ...prev, loading: false }));
      }
    })();

    return () => controller.abort();
  }, [url, reload]);

  return { ...state };
};
