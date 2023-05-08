import yargs from "yargs/yargs";

yargs(process.argv.slice(2))
  .command({
    command: "$0 <name>",
    builder: (yargs) =>
      yargs.positional("name", {
        description: "to whom we want to say hello",
        type: "string",
        demandOption: true,
      }),
    handler: (argv) => test(String(argv.name)),
  })
  .help()
  .parseSync();

export function test(name: string) {
  console.log(`hello ${name}`);
}
