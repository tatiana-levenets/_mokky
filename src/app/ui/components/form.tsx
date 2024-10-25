import Button from "./button";
// useState({ name, email, ... })
export default function Form() {
  return (
    <form className="lg:py-28">
      <p className="mb-5 lg:mb-9 font-bold text-lg md:text-xl lg:text-2xl;">
        Let’s get in touch!
      </p>
      <input
        className="input-form"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        required
      />
      <input
        className="input-form"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <textarea
        className="input-form mb-4 lg:mb-8"
        name="message"
        id="message"
        rows={4}
        placeholder="Message"
        required
      ></textarea>
      <Button className="w-full">Submit</Button>
    </form>
  );
}
