import { useRef, useCallback, useState } from "react";

// 定義解鎖函式的類型
type LockResolve = (value?: void | PromiseLike<void>) => void;

function usePromiseLock() {
  // 使用 useRef 來儲存鎖狀態和佇列，避免重新渲染時重置
  const lockedRef = useRef<boolean>(false);
  const queueRef = useRef<LockResolve[]>([]);

  const acquire = useCallback((): Promise<void> => {
    if (!lockedRef.current) {
      lockedRef.current = true;
      return Promise.resolve();
    }
    return new Promise<void>((resolve) => {
      queueRef.current.push(resolve);
    });
  }, []);

  const release = useCallback((): void => {
    if (queueRef.current.length > 0) {
      const resolve = queueRef.current.shift();
      if (resolve) resolve();
    } else {
      lockedRef.current = false;
    }
  }, []);

  return { acquire, release };
}

// 在元件中使用：
const PromiseLockDemo = () => {
  const { acquire, release } = usePromiseLock();
  const [logs, setLogs] = useState<string[]>([]);

  const handleTask = async (id: number): Promise<void> => {
    await acquire();
    try {
      setLogs((prev) => [...prev, `Task ${id} started`]);
      await new Promise((res) => setTimeout(res, 1000));
      setLogs((prev) => [...prev, `Task ${id} finished`]);
    } finally {
      release();
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          handleTask(1);
          handleTask(2);
          handleTask(3);
        }}
      >
        啟動任務
      </button>
      <div>
        {logs.map((log, idx) => (
          <p key={idx}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default PromiseLockDemo;
