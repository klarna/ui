export default (...fs) => (x) => fs.reduceRight((acc, f) => f(acc), x)
