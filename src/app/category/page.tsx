import { mockups } from "../constants/mockups";
import Breadcrumb from "../ui/components/breadcrumb";
import MockupCard from "../ui/components/mockupCard";

export default function Page() {
  return (
    <main>
      <section className="py-14 lg:py-28">
        <div className="custom-container">
          <div className="mb-8 lg:mb-16">
            <h2>Device mockups</h2>
            <Breadcrumb homeElement="Mokky" capitalizeLinks />
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-7 md:mb-10">
            {mockups.map((mockup) => {
              return (
                <li key={mockup.id}>
                  <MockupCard {...mockup} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
