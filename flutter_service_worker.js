'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c9891b674e5bb1b3a6a8e51edcd61065",
".git/config": "6bc1dd74133de4ee760b9640d9c7407b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "23b3805e62b98d129d51956e833fc1ea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "65b5c1654626386040ed86b8d0592a4d",
".git/logs/refs/heads/master": "65b5c1654626386040ed86b8d0592a4d",
".git/logs/refs/remotes/origin/master": "edc1cbd337fcff538c10fcc71c54edc6",
".git/objects/00/84cc48b0def6bc0a825004d48636bc966037d6": "412e1300533bb5a79924b7bdd451783c",
".git/objects/01/69ccda700bb723050ba935277661fc7a554e31": "9331482d99dccd39b8d2e518cf3b590c",
".git/objects/02/fc327a1e6ce9a80cdb14f57063af83ea62615e": "3874058993c665dfd8c6dd8901aa9f62",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/b8b401f8ed0128c8bfaa234ab2d12a19afa179": "84ae4561d272cd17251f10cc26525a46",
".git/objects/06/17c21eb7575f7c816af5e54a6578e5dd481724": "33d55366e51d7ed3e8d137accf14fbf8",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/0a/0f9c2531e5d7148b7861c0c845319ee7090224": "ff680a31c5a5929a272b826a604e893e",
".git/objects/0c/b0c2145896cf2fa02afbc9f224c180af3ec109": "68357393dba0bd21a909d61b5939753d",
".git/objects/0d/009164c82f8ce5fa4b790034e8f2e6a6d7df7f": "9a503af3f8a9effb5b5783308c89001c",
".git/objects/0d/cf02ec5673f6b2b3e2edd8d76ddb78f7e8762c": "ad4e3e38e6200fa425fcb35277f0d2e0",
".git/objects/10/88698fab8c97fb48f51bf5765122c605e69e04": "4ae1e241dd659dbb7eb454f7abe0ed04",
".git/objects/11/67f6e027c9d32cbabc47a411b1a2087995fdbb": "3b927c8a66942390fcb525dbf75f6acc",
".git/objects/12/6bec71777bd168dc9a3ece20a790c25a93a23c": "78e4398f80ca104b07ac85cfff7d42c8",
".git/objects/16/06487ebb040c76e45e8f8c9f54f7ea8e78442e": "2e8022cceca484684c3e4e9c1659cc7b",
".git/objects/16/23c67226832af659d7082a6e8f094d865965c8": "97e736da3c43dbbc07a8b6ac11725791",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/5a39fabafed582c6068de9e18062d8db4cdf83": "951ce0db01df5b2e8c5641aeb691cc20",
".git/objects/1a/33662a2967e179d9ad9f29fdc8ed7cdbe0fc94": "214cc9bb940d7b1adda77ca6d972bc86",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/bf295e277d98c4acd8ed4b4fb72d6db1a94756": "3c9754c4141fa3d7e3562536ceaadfa1",
".git/objects/25/7625b945a9452aeb3918cd3b785e3f780c32c1": "136fca5569ef53858096ae934b7dbb4c",
".git/objects/26/e85daf723d0e15e15b81ba78fdf1da921c9321": "eaadb8351b5b7a1f8dee7e1a52693215",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/a31d62a13504987ce96cb07a934290bcbea792": "cba3071e2c70ff509362432fd2d58642",
".git/objects/29/1f4b84f8b3d236a6aab3025cf269e44d54a74f": "8d97491caa771f7f5854d9a9c72fb4ff",
".git/objects/2d/e8b479a22d4b8ec3fbad59297508b442bc2553": "6d888bdfccf78a48de4782aaa958c99d",
".git/objects/30/d22fc227ddfcc543d32e67a22af1d56fe03634": "d85dbbb574532d7d76d4dd8559fb0d2e",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/1da89c7d86794c69d7ecff6d84cd6c4ca9bf2f": "498ecf65320df4b04f28dcd4d95fda6e",
".git/objects/35/9fd3280f2f3ad71a8581795a2c3d29db818d95": "8d45c5cb43c263799846ddaa7e890481",
".git/objects/36/42f15faf4b834e77f27741fd0d066041b3ec53": "806f37c87a3b707937a2c460ac7b84b8",
".git/objects/36/8d764afab021588cbe69e22739b979349de682": "1d71af591180fbe75b4f646e20e3817e",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/a020ff9972fe5d07ab10616c862850a77c7a45": "2730e004fe6713dcfa437c4b36121022",
".git/objects/3c/df5cf6e134c8e7a89cba749356d8d79f722004": "0364aaf738cf21ea2e844ef13c8747e8",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/75747023cf9ab433d2d97b12acbef94d9dc461": "d51d48ef2ced2e09b37968d2a2e9569b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9f373388d3383429d176432847eadf8344dd84": "cdfca51431d11d11b02d447ed7a8fabe",
".git/objects/47/107a33c52ef08d61c9bb2355185abfb450692f": "7a72a556ef9ba77709fe6fdcc11daaf1",
".git/objects/47/c4f0471ed9f583cb7c3a4e4df6ab4650ff77a4": "5aef363f048a8b03cd174264b8b24bd2",
".git/objects/48/d9c028271a3f907024961ead1d62bc2f192996": "a12edfd3d6fb754937215c8657eaf473",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/b933bead82e4da5f3043a831315ed8f9027ded": "6298cedfc64f34d7bd50b556d1653103",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/a647fd8971dc22bb01fbb063b8e921f053aa04": "97789f173670e3b845df1b1210c2eb51",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/b01f04a2caa643b553c137ead92d8007b1cdbe": "1d5fb37df404c10bc16ebda4aaf12a89",
".git/objects/60/076f22aa43d9777f383f69dbd5faa130b6f7fe": "8edadfa009a88435b6a269da7cb6ca8a",
".git/objects/63/3fe0f9f6bdd1f165db0af4fdb816b8acff1f70": "4e311224a25726191a66601a1470505d",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/bc979ea950cf46f45d7cb359931c5453cbcd4b": "42bafcaf514ee450fd8f79cd9b7811e7",
".git/objects/66/d63fbf81d75744c911cb397fe670e3b0b1431a": "959c714451d86da2007914e04a4596c8",
".git/objects/68/b285dfb2fd45d17423bf23b996237ed4bce560": "4b8c76a7ce01a694ae89cc5a09a2581e",
".git/objects/68/c782fcd84bcdafa4f4cffd7e13909dc7aafbf1": "b2fccbc9c9e67f5d587e22611be933a0",
".git/objects/69/1f931c5e69426532c4ec25b5a7747d7ec9ad30": "a9e9cb69b0b7254338d7ee3bf6fb4d65",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/a7cbe4480efc719237888e1d9af762b02a6e3b": "805464e43447cb8f4e6d26586be13f63",
".git/objects/6e/ab599aaba6c73340d9400f25d537bee5fa1058": "3cf6e97fc1a1520896665f143a3bcbdb",
".git/objects/6e/f605c66416aa03a2e3753c08ede57bb383181b": "a91baed8cd261aeb1df68fe745022549",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/fde53b03d3345e094813a6c051c3363d78f536": "37a97bf8708dabe8dd66d69865c34f17",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/ce32acd50733597942ddd6be3691dddf78e462": "481a5a944adeef9bf3a67cc7fd980b04",
".git/objects/75/6462a19cdfd164357d986818feb4abdfd2b25d": "ef24a3e7996e2937b31ffc4eef7d9c49",
".git/objects/77/21bbb50f3f34b587e5e5797512caa809c3fbae": "c22cef1a279bc72886e5e56d2db3ca7e",
".git/objects/78/2f7e86f6ea322f048dd90c4c132993f2cdacae": "869fc6cd4a2a9a6555a33e64d581fc30",
".git/objects/78/d32fae1b8fb9e3bdda62ba6f356b065daef1fb": "bd11cf59d202f56bddc7cb2e8069b353",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/1ae41a90cfca629706ceb23b303f1afcf36696": "37144c0906d78806e8b90cec2c01d61f",
".git/objects/80/9e2c44523a8d486f3c6d97e7a25fcd992e7852": "1b847665a86ef4f41c7d6a9e3e43f3a0",
".git/objects/83/9241f76e3ccc6be614fdda39a2f165f17e35e9": "8398776ee9a0c99759409f3b651825c9",
".git/objects/83/9e181fb57fdea43a4991030dffa19952ad7c60": "b8cf02895c12ffff6a0f8b98ddec9cfd",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/638ffd5eb0bdc0449f211736352f5241bbb5a2": "b99635ccea97903451e43b00a7dd0b97",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/87a255e57687c6cdd9cf7ece9695cde9f2d1b7": "137f389254a7d8ca1d12fd05a9d8a227",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/7a2ec8ba603de38057ab5666308ab0f300806a": "3cbd5522394e8a653b9e47c44aba9a3a",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/e9a55df4ec461f3b5741f4ea74c42de70623bf": "f61245eff1a9bac6d61b27648cc1af71",
".git/objects/90/384c1a126d25202e07d74c33f0ae577fdde5ee": "e94da4734a2c448b3805611ae2da9095",
".git/objects/90/3984028c7f5214e0303139f68a366bad143139": "2ddfc9570777a087bd91bbb00d1b4443",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/12e7ebf82290eeae47ef5bd3a58dddb5d64774": "3e78786730f4c8945708a44d2052891b",
".git/objects/97/320259bfb3081337c78ec5d869eb7cc62485b0": "e5bf4dcd1b04adf2d39da2700fea1ba1",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9f/f8242702f18af8c1ed016ad0aec7ae941fd53a": "66191f7bbd3a6901895b8aa3efa8e9ad",
".git/objects/a1/2d2d83aa213001cab161f298798da7f17c733d": "61535cd8bb3271c20e79c4ef65db56e0",
".git/objects/a1/ccc6c293dabb542d6c0459b2ec097948b927d2": "d3787e014174f3c50f28bf0d6fd3ee39",
".git/objects/a3/1235ccb6ce04cdf5e73becaee86b034f714bbf": "b3a576d1d655630f67e86001c1e87b0a",
".git/objects/ac/9c1a9dbd301e529c9b1445122547e3b691e204": "98c565900937dcfb5bcd771e5402a6b5",
".git/objects/ad/20e2d363ff7ef0b32930898fa955643e3cc658": "e15953dd1b6bfa6cc2ec8bb1b6914a98",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/42071b0a28deaf45400b046892e1d66ce05d3c": "f41e376a2e5b25aad6123c26c604615a",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/464c7988f427255bb021c39edd2b228a333a4a": "07b5e6fefc822898f8925349eb808dee",
".git/objects/b0/b34bdc5accf92040573589c974b35f57fbfb3e": "f90688d0c46cd2ca700650de431fb5d5",
".git/objects/b1/1802ca7bda03be67991174b36b04def441d6c4": "e6f6effd56ce65806b6a32980b4121a1",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/6c6e7227238c90866a10b8bc40b37d06424a0f": "7c43143c0c39843b00fe28dd7dade75c",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/7a6497880214f48c47e24b9284eb6690c49004": "f2d1e690ea5a6bebabb1d2fbe18145d2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/187667b408e904eaf972c59dba9e8a84ef1f5c": "8fd26d51db2934b1a6cf282ceb7f2d6d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8a69100fe6b0156fce3d5622894d6b585b194f": "f8b8f06a43e7f12a918b40b415e8436a",
".git/objects/bd/ab42796e6edcd2afaf62cc459fb1cd8710e252": "20174d87131bc2d3f808ac74fc5cdc6b",
".git/objects/be/ba1f6e16c280f54744fe9d072de6a413f8864b": "8bd3a22ac89d7bb07d1612eb9e0ad6d2",
".git/objects/c1/1dfbe82952228af6bbc0b70506f6ffacb076ac": "219c051e20c81134ae65e7e7613f7474",
".git/objects/c2/ebfcaf7c3c73f5516a8da62a1081d5ec3a2c26": "db88f8e6a42d5a5038247117a007750b",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/55004b49b335746df503ac65c1bd06e16b0e7a": "24add89adba342f7c19513cc90be838b",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/52aa9d1c6899d31c80dbcb82068bce675bedbf": "b17ae7d5dc5f3553aabd35891e83f218",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/46f52f25f83e41511e0d2adfa49e22d36c4204": "410e247a54bdf62cc21babc3eff7bb37",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/742a740bd0a6bf072558b2a382de001d6049e5": "b24b6fbfc76b291fcda2829242cbaeb5",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/f20fb96be1b7b534a53c2969381855a6620f60": "cfe40f2305e062005f0b5745336ed47e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/494ed133220485306f5f039bf1f23714aa8646": "c041aab42e9fff26ed5b2b5befdf8e94",
".git/objects/db/6e937e13f24d2b3b740d8042308ee4998b0ae8": "4c7c5efa39ac7263a92d9a312e9628bf",
".git/objects/dc/9e47d2cd1be05294a679e81e0952bf2e127c85": "e0266f6c0b3185b1bd5b3743ebc6f546",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/122f04125f1a34ac8791d2d8f116847b0c1c57": "a491cb0396a96340d177fc0675319ad4",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/0b2d62a5338c6fc63d71ab3aee61a2dacdcc4b": "a03c730847a406e902dc98a123dabeeb",
".git/objects/ed/423c1f60012662c2e1d95d063f823956c50426": "10189f7aa15bd99fa231414e5011d640",
".git/objects/ef/81775c8b96f6c670593b052f0d1beacf08f38e": "79e374a6a7a4094e53ebf19504b9adae",
".git/objects/f0/829a86339b633dd34f831affe9c0a5d3af6a3f": "1e5960cce891f5a730c5f37bde733eee",
".git/objects/f1/34ab90981cc878f98f428e2744dd31f8431bf6": "261a3f76e34ff0c2b5352c146398bed2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/f2bfbbe87702b2e448d711d0f1463afa7725bc": "ff3d35a2324480a9b7482e6553f842c4",
".git/objects/f7/9106bbd45c38cf8b869f1d8dc2bfb0ae2c28c3": "da659ab5d4aa1718f61a43e59d41a85b",
".git/objects/fb/d603722c1471f93b4727ea3089024a004750de": "7e7cc4e0ea796d21d562c9244a48fc43",
".git/objects/fd/abd9d13f7f28dc57765d986c0521bfd253cd00": "7dbf06137649893739fdd02e188f72e6",
".git/refs/heads/master": "d63aa5aedcabfefe12ceb112bac60b03",
".git/refs/remotes/origin/master": "d63aa5aedcabfefe12ceb112bac60b03",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "f411304b2474fb917a1f718039f2114f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "01223d8e061b16ce8f581f5547c02ed9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ec42bbab73733808be4ea1e90030e523",
"/": "ec42bbab73733808be4ea1e90030e523",
"main.dart.js": "e326e11e8545bad6b4a60515167cd4c7",
"manifest.json": "dea5085da6b3eb7fd4bd5411635b5494",
"version.json": "f416dcb3107ff18691f3c4b9729862e7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
