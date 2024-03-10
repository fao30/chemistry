import { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ElementBySymbol from "./pages/ElementBySymbol";

const Home = lazy(() => import("@/pages/Home"));

export default function App() {
  // const [angles, setAngles] = useState<{ angle: number; interval: NodeJS.Timeout }[]>([]);

  // useEffect(() => {
  //   const newAngles = electrons.map((_, shellIndex) => ({
  //     angle: 0,
  //     interval: setInterval(
  //       () => {
  //         setAngles((prevAngles) => {
  //           const newAngles = [...prevAngles];
  //           newAngles[shellIndex].angle += 0.01 / (shellIndex + 1);
  //           return newAngles;
  //         });
  //       },
  //       20 * (shellIndex + 2),
  //     ),
  //   }));

  //   setAngles(newAngles);

  //   return () => {
  //     for (const newAngle of newAngles) {
  //       clearInterval(newAngle.interval);
  //     }
  //   };
  // }, []);

  return (
    <BrowserRouter>
      {/* <section className="flex items-center justify-center min-h-screen bg-black">
        <section className="relative w-96 aspect-square">
          <div className="absolute flex items-center justify-center centered size-6 bg-white text-dark rounded-full">
            <p>S</p>
          </div>

          {electrons.map((e, shellIndex) => {
            const radius = 40 + shellIndex * 30;

            return (
              <div
                key={shellIndex}
                style={{ width: `${radius * 2}px` }}
                className="rounded-full aspect-square border-2 border-white absolute centered"
              >
                <div
                  className="absolute centered"
                  style={{ transform: angles[shellIndex]?.angle ? `rotate(${angles[shellIndex].angle}rad)` : undefined }}
                >
                  {Array(e)
                    .fill(e)
                    .map((_, electronIndex) => {
                      const electronAngle = (electronIndex / e) * Math.PI * 2;
                      const x = Math.cos(electronAngle) * radius;
                      const y = Math.sin(electronAngle) * radius;
                      return (
                        <div
                          key={`${shellIndex}-${electronIndex}`}
                          className="!-translate-x-2 !-translate-y-2 size-4 rounded-full bg-green-400 absolute"
                          style={{ left: x, top: y }}
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
        </section>
      </section> */}
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ElementBySymbol />} path="/:symbol" />
      </Routes>
    </BrowserRouter>
  );
}
