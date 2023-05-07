function ContentSection(props) {
  return (
    <section className="container ml-20 py-6 px-4 mt-10 sm:px-6 lg:px-8 shadow-2xl bg-[#5c5b5b] h-auto w-[1000px] rounded-lg">
      <h6 className="font-bold text-2xl text-white text-left mt-0">
        {props.sectionName}
      </h6>
      <h6 className="font-bold text-white text-left mt-2">
        {props.sectionSubName}
      </h6>
      <ul className="list-disc list-inside text-white text-left mt-4 space-y-2">
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default ContentSection;
