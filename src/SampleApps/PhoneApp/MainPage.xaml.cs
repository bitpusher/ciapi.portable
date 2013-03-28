using System.Threading.Tasks;
using System.Windows;
using CIAPI.Portable.Model;
using CIAPI.Portable.Rpc;
using Microsoft.Phone.Controls;

namespace PhoneApp
{
    public partial class MainPage : PhoneApplicationPage
    {
        // Constructor
        public MainPage()
        {
            InitializeComponent();

            Client = new Client("http://ciapi.cityindex.com/tradingapi", "portable app");
        }

        private Client Client { get; set; }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            if (Client.SessionId != null)
            {
                LoginButton.IsEnabled = false;
                Task<ApiLogOffResponseDTO> t = Client.LogOutAsync();
                t.ContinueWith(tt =>
                    {
                        Dispatcher.BeginInvoke(() =>
                            {
                                OutputTextBox.Text = "Logged out: " + tt.Result.LoggedOut;
                                LoginButton.Content = "LogIn";
                                LoginButton.IsEnabled = true;
                            });
                    });
            }
            else
            {
                LoginButton.IsEnabled = false;
                Task<ApiLogOnResponseDTO> t =
                    Client.LoginAsync("xx663766", "password1");
                t.ContinueWith(tt =>
                    {
                        Dispatcher.BeginInvoke(() =>
                            {
                                OutputTextBox.Text = "Logged in: " + Client.SessionId;
                                LoginButton.Content = "Logout";
                                LoginButton.IsEnabled = true;
                            });
                    });
            }
        }
    }
}