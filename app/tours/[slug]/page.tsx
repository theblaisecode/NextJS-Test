function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className="text-3xl">Slug: {params.slug}</h1>
    </div>
  );
}
export default page;
