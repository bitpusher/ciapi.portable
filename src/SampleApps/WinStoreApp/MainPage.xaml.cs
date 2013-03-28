using System;
using System.Threading.Tasks;
using CIAPI.Portable.Model;
using CIAPI.Portable.Rpc;
using Windows.UI.Core;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace WinStoreApp
{
    /// <summary>
    ///     An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        public MainPage()
        {
            InitializeComponent();
            Client = new Client("http://ciapi.cityindex.com/tradingapi", "portable app");
        }

        private Client Client { get; set; }

        /// <summary>
        ///     Invoked when this page is about to be displayed in a Frame.
        /// </summary>
        /// <param name="e">
        ///     Event data that describes how this page was reached.  The Parameter
        ///     property is typically used to configure the page.
        /// </param>
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            if (Client.SessionId != null)
            {
                LoginButton.IsEnabled = false;
                Task<ApiLogOffResponseDTO> t = Client.LogOutAsync();
                t.ContinueWith(tt => Dispatcher.RunAsync(CoreDispatcherPriority.Normal, () =>
                    {
                        OutputTextBox.Text = "Logged out: " + tt.Result.LoggedOut;
                        LoginButton.Content = "LogIn";
                        LoginButton.IsEnabled = true;
                    }).AsTask().Wait());
            }
            else
            {
                LoginButton.IsEnabled = false;
                Task<ApiLogOnResponseDTO> t =
                    Client.LoginAsync("xx663766", "password1");
                t.ContinueWith(tt => Dispatcher.RunAsync(CoreDispatcherPriority.Normal, () =>
                    {
                        OutputTextBox.Text = "Logged in: " + Client.SessionId;
                        LoginButton.Content = "Logout";
                        LoginButton.IsEnabled = true;
                    }).AsTask().Wait());
            }
        }
    }
}