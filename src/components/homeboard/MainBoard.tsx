import React, { FC } from 'react';
import UserTips from './subcomponents/UserTips';
import Tutorials from './subcomponents/Tutorials';

interface MainBoardProps {}

const MainBoard: FC<MainBoardProps> = ({}) => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mb-6">
        Welcome to Your Dashboard!
      </h1>
      <div className="mb-8">
        <p className="text-lg mb-4">
          Here you can manage your scanned receipts, summarize PDFs, and analyze
          images.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Scan Receipt
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Upload PDF
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded">
            Analyze Image
          </button>
        </div>
      </div>
      <UserTips /> {/* Add UserTips component */}
      <Tutorials /> {/* Add Tutorials component */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        {/* Display recent receipts, PDFs, or images here */}
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Statistics and Insights</h2>
        {/* Show statistics and insights based on user data */}
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">To-Do List</h2>
        {/* User reminders or tasks */}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Feature Highlights</h2>
        {/* Highlight key features with descriptions */}
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        autem, iste laborum praesentium minima cum non voluptate laboriosam
        dicta illo voluptatum facilis perspiciatis ex sit, voluptates asperiores
        veniam repudiandae similique possimus dolorem. Cupiditate nesciunt et
        ipsa praesentium tenetur atque blanditiis ullam alias sapiente porro
        inventore, placeat eos assumenda, optio obcaecati laboriosam neque nobis
        minima sed nam quo! Nesciunt sunt numquam fugit quidem debitis quaerat,
        officiis error amet voluptatum! Cum explicabo, eligendi, quis neque
        odit, numquam aut maxime enim fugit deserunt corrupti nulla. Corrupti
        ratione minus id harum numquam adipisci exercitationem ad sunt ducimus,
        blanditiis fuga assumenda ut a nisi nobis dolores possimus repellat
        reiciendis commodi? Accusantium adipisci vitae fugit? Quo quasi illum
        fugit iusto assumenda explicabo vitae enim corrupti numquam voluptates
        repellat ipsa adipisci eius soluta debitis cum in sunt accusamus
        incidunt, architecto, distinctio placeat id fuga unde! Saepe voluptatem
        blanditiis iure laborum voluptas ratione animi distinctio voluptatibus
        odio. Praesentium alias vel qui! Consequatur quos, dignissimos debitis
        maxime nobis quia corrupti aperiam incidunt possimus culpa eveniet, eos
        dolor at necessitatibus temporibus eum omnis accusamus impedit
        blanditiis veritatis ea error. Facere veritatis corporis vero rerum,
        repellendus eaque id, ad architecto explicabo ipsa vel debitis! Ipsam
        rerum iusto voluptates placeat aspernatur delectus tempore, eum tenetur
        assumenda quis mollitia minus sequi corporis, reiciendis, illum quaerat
        praesentium explicabo aut! Sunt porro minus velit provident aliquam
        tempora, quidem autem amet debitis fugit illo, esse incidunt veniam
        perferendis quam at quasi! Optio, harum? Tenetur quidem a enim eos
        soluta perspiciatis optio ipsum iusto laboriosam voluptate sit autem
        error id blanditiis neque sint, voluptas nisi similique excepturi eaque
        dolorem. Ad excepturi corporis animi. Earum veritatis, quia, odio odit
        non eum, consequatur quas doloremque consequuntur necessitatibus facilis
        ipsam esse. Totam eaque aliquam facere, ex eius maiores modi
        voluptatibus laboriosam corrupti deleniti! Quos ea debitis consectetur,
        pariatur natus saepe possimus error molestiae, quod corporis minima esse
        nemo tenetur est alias porro nostrum, deserunt sunt! Dolorum itaque
        voluptate praesentium molestiae, tempore exercitationem rem voluptatum
        repellendus voluptatem! Itaque qui excepturi illo inventore. Accusantium
        sapiente magni blanditiis delectus illo iure ipsa, quae iste ullam
        explicabo dolorem sunt voluptatibus totam dolores optio aliquam! Odio
        mollitia quas, amet soluta distinctio doloremque? Tempore molestiae
        neque fuga necessitatibus vero voluptate incidunt quo assumenda tempora,
        odio, doloremque reiciendis nesciunt possimus perspiciatis. Laborum
        molestiae cupiditate sint soluta ex accusamus. Laborum eius vel dolorem
        illum officiis debitis repellat, vero dicta consequatur suscipit officia
        aliquid alias accusantium beatae? Totam architecto ipsam soluta at, non
        perspiciatis repellat animi ipsa nihil suscipit. Aliquid placeat laborum
        eligendi earum quod deserunt neque ullam, dolore odio. Nesciunt eligendi
        vitae quia laboriosam, veritatis aut soluta sequi voluptas officia,
        minus sit voluptatibus iure dolore odit, expedita quaerat cum eaque nisi
        hic ipsum! Omnis molestiae nam quis facilis doloremque ad rerum, itaque
        provident quos sit dolor ratione accusantium earum. Recusandae aperiam
        praesentium inventore quisquam perferendis dolor deleniti aliquid
        cupiditate consequatur exercitationem. Quo quasi sit ipsum atque nihil
        numquam magni ullam temporibus tenetur nemo, nam, quis deleniti ab nobis
        iusto quas eius, sed veritatis inventore fugit iste maiores voluptas
        culpa consequuntur? Mollitia sequi minus itaque officia consequuntur
        eligendi ullam praesentium aliquid repudiandae totam magni, aspernatur
        ut harum voluptate, numquam ratione, optio quibusdam voluptates! Modi
        odio necessitatibus debitis nisi accusantium, earum alias iste impedit
        dolores repellendus nesciunt, a quis vel consequuntur autem provident.
        Ducimus mollitia minus deleniti, quod magnam aspernatur voluptates vitae
        nemo nisi adipisci provident odit magni rem, nesciunt, ratione iure
        sequi? Error doloremque expedita rerum nihil, vitae sequi? Nesciunt nam
        deleniti neque incidunt obcaecati necessitatibus at maiores voluptatibus
        laboriosam, velit dolores dignissimos aspernatur illo nemo quas corporis
        ullam ratione asperiores, quis assumenda et dolorem minima explicabo.
        Nihil temporibus voluptatem, explicabo repellat voluptates non? Id
        dignissimos cum qui rerum quia libero, quae, ullam facere tempore atque
        nulla perferendis laudantium nesciunt nobis eligendi non commodi
        molestias eveniet reiciendis temporibus voluptatibus illum laborum
        optio. Iste eius tenetur vitae assumenda cumque repellendus quam
        tempore, consectetur maxime. Tempore minus optio porro expedita
        molestiae architecto necessitatibus nesciunt impedit a velit accusamus
        similique sequi maiores quod adipisci fugit nam, dignissimos ratione
        esse neque inventore. Exercitationem dicta fugit error officia
        obcaecati? Dolorem minus blanditiis explicabo, corporis officiis illo
        reprehenderit modi officia ipsam, fuga, eum repellendus itaque.
        Distinctio, provident expedita reiciendis ipsum quidem quod cupiditate
        dolores sequi rerum maiores dicta voluptatem voluptate, sunt nostrum
        dolor. Quibusdam asperiores ipsam beatae explicabo. Voluptatibus nemo
        accusamus officia ea sequi consectetur alias fuga saepe, aspernatur
        officiis. Saepe illo molestias porro quos doloribus laboriosam beatae,
        veniam aliquid ea nostrum neque, consectetur qui corporis accusantium
        cum rem velit deserunt. Expedita velit dolor ea quae commodi ab omnis
        quia corrupti magnam repellat cum, repellendus cumque eius natus iure
        tempore ipsam! Soluta, rem! Eos error magnam laborum optio id. Nemo
        laborum dolorem molestiae at fuga similique hic itaque ipsa qui, aliquam
        aliquid amet incidunt veritatis aspernatur soluta ullam sed dolore atque
        magni cumque esse assumenda rem asperiores. Laudantium quisquam
        similique exercitationem sit rerum illo unde omnis cupiditate, excepturi
        reprehenderit doloremque est ducimus natus harum eveniet recusandae
        repellendus? Dolor ratione similique, tenetur perspiciatis assumenda
        error fugiat voluptatem perferendis nostrum excepturi ex officiis sint
        dolore quo iusto dicta reiciendis ipsa tempora impedit nulla dolorum.
        Numquam nesciunt ullam quasi unde ipsam labore accusamus, esse veniam!
        Eligendi quasi ipsa voluptas quaerat consequatur expedita eum provident
        id nam alias. Ut similique aspernatur aliquam minima consequatur, quia
        cum repellendus neque animi. Hic laudantium magni blanditiis, aperiam
        rerum ex, officiis non facilis maxime molestias amet architecto odio
        dolores esse quia odit explicabo natus sed veniam corporis. Repellendus
        qui inventore dolores incidunt eos quaerat ad aspernatur facilis dolorem
        in officia enim, omnis itaque distinctio magni consequatur sit
        blanditiis corporis consectetur provident quod sint illo nemo quae.
        Consectetur maxime harum blanditiis nostrum culpa temporibus, velit
        quisquam nemo tenetur. Voluptate libero adipisci sit nostrum amet
        similique beatae, obcaecati illo in quibusdam provident quas cupiditate
        aut, ea error rerum! Fuga impedit, consectetur quam cum sunt nulla
        molestiae deserunt quia laborum ipsa quis animi modi. Ipsa ab iste
        similique, eum odit ducimus molestias optio deleniti quibusdam nihil. At
        commodi debitis ex amet doloremque eos tempora neque officia.
      </p>
    </div>
  );
};

export default MainBoard;
