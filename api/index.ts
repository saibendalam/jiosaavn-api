import 'dotenv/config'
import { App } from '../src/app'
import { AlbumsRoute } from '../src/routes/albums.route'
import { SongsRoute } from '../src/routes/songs.route'
import { SearchRoute } from '../src/routes/search.route'
import { PlaylistsRoute } from '../src/routes/playlists.route'

const app = new App([new SearchRoute(), new SongsRoute(), new AlbumsRoute(), new PlaylistsRoute()])

export default app.getServer()
