using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using CIAPI.Portable.Model;
using CIAPI.Portable.Rpc;

namespace SilverlightApp
{
    public partial class MainPage : UserControl
    {
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
